import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getAssetUrl } from "../../utils";

export const Navbar = ({japanese, setJapanese, nav}) => {
  const [visible, setVisible] = useState(null);

  const isMobile = window.innerWidth <= 760;

  return (
    <nav 
      className={`${styles.navbar} 
                  ${visible === null && isMobile ? styles.closeNavAnimation : "" }
                  ${visible != null && (visible ? styles.openNavAnimation : styles.closeNavAnimation)}`}>
      <div className={styles.expandBtn}>
        <img
          className={styles.iconHighlight}
          src={
            (visible === false) || (visible === null && isMobile)
              ? getAssetUrl("directional/right_arrow.png")
              : getAssetUrl("directional/left_arrow.png")
          }
          alt="expand-button"
          onClick={() => setVisible(visible === null ? (isMobile ? true : false ) : !visible)}
        />
      </div>
      
      <div className={styles.bar}>
        <div className={styles.langToggle} >
          <div className={styles.langs}>{"EN\n\n日本"}</div>
          <img
            className={`${styles.langBtn} ${japanese ? styles.toggleJapanOnAnimation : styles.toggleJapanOffAnimation}`}
            src={
              japanese
                ? getAssetUrl("nav/japanese.png")
                : getAssetUrl("nav/english.png")
            }
            alt="language-toggle"
            onClick={() => setJapanese(!japanese)} />
        </div>
        <a href="#hero">
        
          <img
            className={`${styles.navImg} ${nav === 1 ? styles.iconHighlight : "" }`}
            src={getAssetUrl("nav/home.png")} />
        </a>

        <a href="#about">
          <img
            className={`${styles.navImg} ${nav === 2 ? styles.iconHighlight : "" }`}
            src={getAssetUrl("nav/about.png")} />
        </a>

        <a href="#experience">
          <img
            className={`${styles.navImg} ${nav === 3 ? styles.iconHighlight : "" }`}
            src={getAssetUrl("nav/experience.png")} />
        </a>

        <a href="#projects">
          <img
            className={`${styles.navImg} ${nav === 4 ? styles.iconHighlight : "" }`}
            src={getAssetUrl("nav/projects.png")} />
        </a>

        <a href="#contact">
          <img
            className={`${styles.navImg} ${nav === 5 ? styles.iconHighlight : "" }`}
            src={getAssetUrl("nav/contact.png")} />
        </a>
      </div>
    </nav>
  );
};
