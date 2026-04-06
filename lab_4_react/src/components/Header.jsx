import React from "react";

const Header = ({ isDark }) => {
  return (
    <header className="mb-10">
      <h1 className={`text-5xl font-extrabold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-gray-950'}`}>
        Roman Andrushchenko
      </h1>

      <p className="text-emerald-500 font-semibold mt-2 text-lg">
        Python Developer | Cybersecurity Student
      </p>

      <div className={`mt-5 text-sm border-y py-4 transition-colors ${isDark ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
        Lviv, Ukraine • (098) 891 5060 • romanandrushchenko0@gmail.com
      </div>

      <p className={`mt-5 leading-relaxed transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        Analytical and detail-oriented Python Developer Trainee with a strong
        foundation in algorithms, cryptography, and secure software systems.
      </p>
    </header>
  );
};

export default Header;