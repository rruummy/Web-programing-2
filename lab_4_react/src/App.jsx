import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm"; // Імпортуємо оновлену назву

function App() {
  const [isDark, setIsDark] = useState(false);

  // Автоматичне керування темою за часом
  useEffect(() => {
    const checkTheme = () => {
      const hour = new Date().getHours();
      const shouldBeDark = hour < 7 || hour >= 21;
      setIsDark(shouldBeDark);
    };
    checkTheme();
    const interval = setInterval(checkTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen flex justify-center py-10 transition-colors duration-300 ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <div className={`w-[900px] shadow-2xl rounded-2xl p-10 relative transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        
        {/* Кнопка перемикання теми */}
        <button 
          onClick={toggleTheme}
          className={`absolute top-10 right-10 px-4 py-2 rounded-full border-2 font-bold text-xs transition-all ${
            isDark ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900' : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
          }`}
        >
          {isDark ? 'ДЕННИЙ РЕЖИМ' : 'НІЧНИЙ РЕЖИМ'}
        </button>

        <Header isDark={isDark} />
        <Experience isDark={isDark} />
        {/* Передаємо номер варіанту для завантаження відгуків */}
        <Reviews variant={1} isDark={isDark} /> 
        <Education isDark={isDark} />
        <Footer isDark={isDark} />
      </div>

      {/* Відображення форми зворотного зв'язку */}
      <ContactForm isDark={isDark} />
    </div>
  );
}

export default App;