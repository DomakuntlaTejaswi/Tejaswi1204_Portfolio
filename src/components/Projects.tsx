
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Snack Billing System",
      description: "Developed a comprehensive Movie Snack Billing System using C programming language, aimed at streamlining the process of managing and billing for snacks sold at a movie theater.",
      technologies: ["C Language"],
      features: [
        "Designed and implemented efficient algorithms for handling various transactions",
        "Including item selection, quantity management, and billing calculations"
      ],
      githubLink: "https://github.com/DomakuntlaTejaswi/Movie-Sanck-Billing-System/tree/main"
    },
    {
      title: "Online Food Order System",
      description: "Developed a comprehensive online food ordering platform that allows users to browse menu items, place orders, and manage their food delivery preferences with an intuitive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Interactive menu browsing and item selection",
        "User-friendly order management system",
        "Responsive design for seamless user experience",
        "Real-time order tracking and updates"
      ],
      githubLink: "https://github.com/DomakuntlaTejaswi/Online-food-order-system"
    },
    {
      title: "SHair - Hair Care Platform",
      description: "Implementing a comprehensive platform that addresses the personalized nature of hair care. Utilized frontend technologies (HTML, CSS, Javascript) to create a dynamic UI, integrated planned AI-based recommendations using user input.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Personalized hair care recommendations",
        "Dynamic and responsive user interface",
        "AI-integrated planning for user recommendations"
      ],
      githubLink: "https://github.com/DomakuntlaTejaswi/SHair"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="text-gray-600 space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
