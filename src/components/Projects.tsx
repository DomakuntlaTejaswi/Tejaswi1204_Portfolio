
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
      ]
    },
    {
      title: "Graduate Analysis and Admission Prediction",
      description: "Implemented models evaluated with metrics, optimized through selection and tuning, with libraries using scikit-learn, pandas, numpy, and matplotlib documented in Jupyter notebooks.",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
      features: [
        "Data analysis and visualization",
        "Predictive modeling for admission outcomes",
        "Statistical analysis and insights"
      ]
    },
    {
      title: "SHair - Hair Care Platform",
      description: "Implementing a comprehensive platform that addresses the personalized nature of hair care. Utilized frontend technologies (HTML, CSS, Javascript) to create a dynamic UI, integrated planned AI-based recommendations using user input.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Personalized hair care recommendations",
        "Dynamic and responsive user interface",
        "AI-integrated planning for user recommendations"
      ]
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
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
