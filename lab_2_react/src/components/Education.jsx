import React from "react";

const Education = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Education
      </h2>

      <div className="bg-gray-50 p-5 rounded-xl">
        <p className="text-sm text-gray-500">
          Expected June 2027
        </p>

        <h3 className="font-semibold text-gray-800 mt-1">
          Bachelor of Cybersecurity
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Lviv Polytechnic National University
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
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