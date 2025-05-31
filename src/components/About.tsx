
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate Computer Science student at SR University, Telangana, with a strong academic record (GPA: 9.26). 
                My journey in technology has been driven by curiosity and a desire to create innovative solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                I have experience in various programming languages including C, Java, Python, and web technologies. 
                I'm particularly interested in software development, data structures, and algorithms.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-4">Interests</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Software Development</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Web Development</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg">
                <h4 className="text-3xl font-bold text-gray-800 mb-6 text-center">Technical Skills</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-semibold">C</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-lg font-semibold">Java</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-lg font-semibold">Python</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-lg font-semibold">HTML/CSS</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-lg font-semibold">JavaScript</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-lg font-semibold">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
