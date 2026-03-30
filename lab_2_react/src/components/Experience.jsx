const Experience = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">
        Projects
      </h2>

      <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
        <p className="text-sm text-gray-500">
          January 2026 – Present
        </p>

        <h3 className="font-semibold text-gray-800 mt-1">
          Python Developer Trainee | Independent Projects
        </h3>

        <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Signal Processing Tool:</strong> Built spectrum analysis utilities using Python.
          </li>
          <li>
            <strong>Secure Messaging System:</strong> Implemented AES-256 encryption and SHA-256 hashing.
          </li>
          <li>
            <strong>Algorithm Optimization:</strong> Improved performance of computational scripts.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;