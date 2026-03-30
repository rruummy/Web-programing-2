import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white w-[900px] shadow-xl rounded-2xl p-10">
        <Header />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;