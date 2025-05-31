
import { Github, Linkedin, Mail, Phone, Code } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Domakuntla Tejaswi</h1>
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/tejaswi-domakuntla-46b861214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a 
                href="https://github.com/DomakuntlaTejaswi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
              >
                <Github size={16} className="text-white" />
              </a>
              <a 
                href="https://leetcode.com/u/Tejaswi_0412/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                <Code size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
