
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate Computer Science student at SR University, Telangana, with a strong academic record (GPA: 9.26). 
                My journey in technology has been driven by curiosity and a desire to create innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have experience in various programming languages including C, Java, Python, and web technologies. 
                I'm particularly interested in software development, data structures, and algorithms.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">SQL</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Interests</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Software Development</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Web Development</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
