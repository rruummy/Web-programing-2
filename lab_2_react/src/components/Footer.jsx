const Footer = () => {
  const skills = [
    "Python",
    "OOP",
    "AES / SHA-256",
    "Network Security",
    "Linux",
    "Git",
    "TCP/IP",
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Footer;