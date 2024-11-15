const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];

  class Particle {
      constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 2;
          this.vy = (Math.random() - 0.5) * 2;
          this.size = Math.random() * 2 + 1;
          this.connections = [];
      }

      update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'orange';
          ctx.fill();
      }

      connect(particles) {
          this.connections = [];
          particles.forEach(p => {
              const distance = Math.hypot(p.x - this.x, p.y - this.y);
              if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  ctx.lineTo(p.x, p.y);
                  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                  ctx.stroke();
                  this.connections.push(p);
              }
          });
      }
  }

  function createParticles() {
      for (let i = 0; i < 100; i++) {
          particles.push(new Particle());
      }
  }

  function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
          particle.update();
          particle.draw();
          particle.connect(particles.slice(index + 1));
      });

      requestAnimationFrame(animate);
  }

  function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);

  createParticles();
  animate();