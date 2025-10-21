import { useState } from "react";
import "./assets/style/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHome from "./components/SectionHome";
import SectionAbout from "./components/SectionAbout";
import SectionFAQ from "./components/SectionFAQ";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setActiveSection(section), 100);
  };

  return (
    <div className="content-wrapper">
      <Header onSectionChange={handleSectionChange} />
      <hr className="dashed-line" />
      <main>
        <section className={`home ${activeSection === "home" ? "active" : ""}`}>
          <SectionHome onSectionChange={handleSectionChange} />
        </section>
        <section className={`about ${activeSection === "about" ? "active" : ""}`}>
          <SectionAbout />
        </section>
        <section className={`faq ${activeSection === "faq" ? "active" : ""}`}>
          <SectionFAQ />
        </section>
      </main>
      <hr className="dashed-line" />
      <Footer />
    </div>
  );
}

export default App;
