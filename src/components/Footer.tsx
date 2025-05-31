
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Domakuntla Tejaswi</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Computer Science Student passionate about creating innovative solutions and building meaningful connections.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/tejaswi-domakuntla-46b861214" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/DomakuntlaTejaswi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:tejaswi.domakuntla@gmail.com"
              className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Domakuntla Tejaswi © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
