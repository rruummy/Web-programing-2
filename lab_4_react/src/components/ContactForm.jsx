import React, { useState, useEffect } from "react";

const ContactForm = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000); // 1 хвилина
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl relative ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-emerald-500">Зворотній зв'язок</h2>
        
        <form action="https://formspree.io/f/mwvwakqv" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Ім'я" required className={`p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
          <input type="email" name="email" placeholder="Email" required className={`p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
          <input type="tel" name="phone" placeholder="Телефон" required className={`p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`} />
          <textarea name="message" placeholder="Повідомлення" rows="4" required className={`p-3 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}></textarea>
          <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition shadow-lg">
            ВІДПРАВИТИ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;