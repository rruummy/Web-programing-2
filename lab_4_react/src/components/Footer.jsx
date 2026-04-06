import React, { useEffect, useState } from "react";

const Footer = ({ isDark }) => {
  const [sysInfo, setSysInfo] = useState({ os: "", browser: "" });
  const skills = ["Python", "OOP", "AES / SHA-256", "Network Security", "Linux", "Git", "TCP/IP"];

  useEffect(() => {
    const data = {
      os: navigator.platform,
      browser: navigator.userAgent,
    };
    localStorage.setItem("user_system_info", JSON.stringify(data));
    setSysInfo(data);
  }, []);

  return (
    <footer>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 border-l-4 border-emerald-500 pl-3">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <div className={`text-center text-[10px] pt-10 border-t ${isDark ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
        Системні логи: OS: {sysInfo.os} | Browser: {sysInfo.browser}
      </div>
    </footer>
  );
};

export default Footer;