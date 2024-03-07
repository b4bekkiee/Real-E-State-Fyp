import React from 'react';
import dev1Image from '../images/dev1.png';
import dev2Image from '../images/dev2.png';
import dev3Image from '../images/dev3.png';
import sup from '../images/sup.png';


const supervisor = {
  name: 'Dr.Siraj',
  role: 'Supervisor',
  description: 'Experienced leader in software development.',
  contact: 'iambekkie99@g',
  image: sup, 
};

const developers = [
  { name: 'Bilal', role: 'MERN Stack Dev', description: 'Passionate about web apps and  love Bugs.', contact: 'iambekkie99@gmail.com', image: dev1Image },
  { name: 'Shahzad', role: 'MERN Stack Dev', description: 'Frontend specialist with an eye for design.', contact: 'iamahmad321@gmail.com', image: dev3Image },
  { name: 'Idrees', role: 'MERN Stack Dev', description: 'Backend guru solving complex problems.', contact: 'idreesahmad894@gmail.com', image: dev2Image },
];

function About() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-lg md:text-2xl font-semibold mb-4 md:mb-8 text-center">Meet Our Team</h1>

      {/* Supervisor Card */}
      <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-md md:shadow-lg dark:bg-neutral-700 max-w-sm mb-4 md:mb-0 mx-auto transition-transform transform hover:scale-105">
        <div className="p-4 md:p-6">
          <div className="flex items-center mb-2">
            <img
              src={supervisor.image}
              alt={supervisor.name}
              className="h-20 w-20 rounded-full object-cover mr-2 transition-transform transform hover:scale-110"
            />
            <h5 className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-50">
              {supervisor.name}
            </h5>
          </div>
          <p className="mb-2 text-sm  md:text-base text-neutral-600 dark:text-neutral-200">{supervisor.role}</p>
          <p className="mb-4 text-sm md:text-base text-neutral-600 dark:text-neutral-200">{supervisor.description}</p>
          <div className="flex justify-center mt-2">
            <a
              href={`mailto:${supervisor.contact}`}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-xs md:text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <br />

      {/* Developers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md overflow-hidden bg-white shadow-md md:shadow-lg dark:bg-neutral-700 max-w-sm mx-auto transition-transform transform hover:scale-105"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-center mb-2">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="h-20 w-20 rounded-full object-cover mr-2 transition-transform transform hover:scale-110"
                />
                <h5 className="text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-50">
                  {developer.name}
                </h5>
              </div>
              <p className="mb-2 text-sm md:text-base text-neutral-600 dark:text-neutral-200">{developer.role}</p>
              <p className="mb-4 text-sm md:text-base text-neutral-600 dark:text-neutral-200">{developer.description}</p>
              <div className="flex justify-center mt-2">
                <a
                  href={`mailto:${developer.contact}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-xs md:text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
