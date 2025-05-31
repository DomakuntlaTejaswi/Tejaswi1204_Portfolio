
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Hi, I'm <span className="text-blue-600">Domakuntla Tejaswi</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Computer Science Student & Software Developer
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Bachelor of Technology in Computer Science | GPA: 9.26
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="https://www.linkedin.com/in/tejaswi-domakuntla-46b861214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/DomakuntlaTejaswi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>tejaswi.domakuntla@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>9392800253</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500">
                <img 
                  src="/lovable-uploads/a3ce3192-33b4-4916-b6e0-a32630ba049f.png" 
                  alt="Domakuntla Tejaswi"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
