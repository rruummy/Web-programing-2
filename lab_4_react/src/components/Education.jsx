import React from "react";

const Education = ({ isDark }) => {
  return (
    <section className="mb-10">
      <h2 className={`text-xl font-semibold mb-4 border-l-4 border-emerald-500 pl-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Education
      </h2>

      <div className={`p-5 rounded-xl transition-colors ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Expected June 2027</p>

        <h3 className={`font-semibold mt-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Bachelor of Cybersecurity
        </h3>

        <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Lviv Polytechnic National University
        </p>

        <ul className={`list-disc pl-5 space-y-2 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          <li>Data Structures & Algorithms</li>
          <li>Network Security</li>
          <li>Applied Cryptography</li>
          <li>Python Development</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;