import { Mail, Linkedin } from 'lucide-react';

const ContactMe = () => {
  return (
    <div className=" backdrop-blur-md text-white p-8 rounded-xl shadow-lg border border-gray-800 z-10">
      <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
        .Contact Me
      </h2>

      <p className="text-gray-300 mb-6">
        Whether it's an idea, a collaboration, or just a hello—I'd love to hear from you.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
      
        <a
          href="mailto:affanmulla077@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
        >
          <Mail size={20} />
          <span>Email Me</span>
        </a>

       
        <a
          href="https://www.linkedin.com/in/affan-mulla-544341321/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          <Linkedin size={20} />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
