
const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Computer Science</h3>
                  <p className="text-blue-600 font-medium">SR University, Telangana, India</p>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p>Oct 2022 - Jun 2026</p>
                  <p className="font-semibold text-green-600">CGPA: 9.26</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">MPC Intermediate</h3>
                  <p className="text-green-600 font-medium">Sr Girls, Warangal</p>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p>Jul 2020 - Jul 2022</p>
                  <p className="font-semibold text-green-600">Percentage: 94%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">High School</h3>
                  <p className="text-purple-600 font-medium">Shantiniketan High School, Warangal</p>
                </div>
                <div className="text-gray-500 mt-2 md:mt-0">
                  <p>Jun 2019 - Jun 2020</p>
                  <p className="font-semibold text-green-600">GPA: 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
