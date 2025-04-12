import React, { useEffect } from 'react';

function Background() {
  
  useEffect(() => {
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
        ctx.fillStyle = 'white';
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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <div className="bg-zinc-950 h-[100vh] w-full fixed z-10 ">
        
        <div className="border-x-2 border-zinc-800 md:mx-10 h-[100vh] z-10 mx-6 bg-transparent"></div>
        <div className="border-y-2 border-zinc-800 h-auto w-full relative bottom-[100vh] md:my-10 md:py-[44vh] bg-transparent "></div>
        <canvas id="particleCanvas"className='relative md:top-[-200%] top-[-100%]'></canvas>
      </div>
      <div className='md:text-4xl text-2xl font-bold absolute text-zinc-200 z-20 md:pl-14 pl-8'>PORTFOLIO.</div>
    </>
  );
}

export default Background;
