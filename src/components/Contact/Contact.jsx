import React from "react";

import styles from "./Contact.module.css";
import { getAssetUrl } from "../../utils";

export const Contact = ({japanese, setNav}) => {
  return (
    <footer id="contact" className={styles.container} onMouseEnter={() => setNav(5)}>
      <h2 className={styles.text}>Contact</h2>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getAssetUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shannon-t-marshall/">linkedin.com/shannon-t-marshall</a>
        </li>
        <li className={styles.link}>
          <img src={getAssetUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/smars-hall">github.com/smars-hall</a>
        </li>
      </ul>
    </footer>
  );
};
