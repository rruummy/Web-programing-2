import React from "react";

const Experience = ({ isDark }) => {
  return (
    <section className="mb-10">
      <h2 className={`text-2xl font-bold mb-5 border-l-4 border-emerald-500 pl-4 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h2>

      <div className={`p-6 rounded-2xl transition-all ${isDark ? 'bg-gray-800 hover:shadow-emerald-900/30' : 'bg-gray-50 hover:shadow-lg'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          January 2026 – Present
        </p>

        <h3 className={`font-bold text-lg mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Python Developer Trainee | Independent Projects
        </h3>

        <ul className={`list-disc pl-5 mt-4 space-y-2.5 text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          <li><strong>Signal Processing Tool:</strong> Built spectrum analysis utilities using Python.</li>
          <li><strong>Secure Messaging System:</strong> Implemented AES-256 encryption and SHA-256 hashing.</li>
          <li><strong>Algorithm Optimization:</strong> Improved performance of computational scripts.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;