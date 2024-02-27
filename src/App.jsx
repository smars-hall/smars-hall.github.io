import styles from "./App.module.css";
import { useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  const [japanese, setJapanese] = useState(false);
  const Navigation = {
    HERO: 1,
    ABOUT: 2,
    EXPERIENCE: 3,
    PROJECTS: 4,
    CONTACT: 5
  }
  const [nav, setNav] = useState(null);
  
  
  return (
    <div className={styles.App}>
      <Navbar japanese={japanese} setJapanese={setJapanese} nav={nav} />
      <Hero japanese={japanese} setNav={setNav} />
      <About japanese={japanese} setNav={setNav} />
      <Experience japanese={japanese} setNav={setNav} />
      <Projects japanese={japanese} setNav={setNav} />
      <Contact japanese={japanese} setNav={setNav} />
    </div>
  );
}

export default App;
