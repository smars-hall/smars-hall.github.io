import React from "react";

import styles from "./About.module.css";
import { getAssetUrl } from "../../utils";

export const About = ({japanese, setNav}) => {
  let section, securityTitle, securityDesc, knowledgeTitle, knowledgeDesc, jlptTitle, jlptDesc = "";
  if(japanese === true) {
    securityTitle = "Windowsのサイバーセキュリティ";
    securityDesc = "Windowsに対してエンドポイントセキュリティの研究と開発の経験があります";
    knowledgeTitle = "多彩な知識";
    knowledgeDesc = "OOPに対して教育があり、手続きパラダイムに対して経験があります";
    jlptTitle = "日本語N3能力認定書";
    jlptDesc = "2021年12月現在、日本語が日常会話レベルとして正式に認められています";
  }
  else { // English
    securityTitle = "Windows Cyber Security";
    securityDesc = "I have experience researching and developing for Windows endpoint file security";
    knowledgeTitle = "Versatile Knowledge";
    knowledgeDesc = "My education spanned a variety of CS subjects with an OOP mindset while my professional experience has followed the procedural paradigm";
    jlptTitle = "JLPT N3 Certified";
    jlptDesc = "As of December 2021, I am officially recognized as a conversational speaker in Japanese";
  }

  return (
    <section className={styles.container} id="about" onMouseEnter={() => setNav(2)} >
      <hr />
      <h2 className={styles.title}>About</h2>
      <hr />
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getAssetUrl("about/securityIcon.png")} 
              alt="Cyber security icon"
              className={styles.iconHighlight} />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutItemTitle}>{securityTitle}</h3>
              <p className={styles.aboutItemDesc}>{securityDesc}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getAssetUrl("about/educationIcon.png")}
              alt="Education icon"
              className={styles.iconHighlight} />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutItemTitle}>{knowledgeTitle}</h3>
              <p className={styles.aboutItemDesc}>{knowledgeDesc}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getAssetUrl("about/languageIcon.png")}
              alt="Language icon" 
              className={styles.iconHighlight} />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutItemTitle}>{jlptTitle}</h3>
              <p className={styles.aboutItemDesc}>{jlptDesc}</p>
            </div>
          </li>
        </ul>
        <div className={styles.videoContainer} >
          <video
            autoPlay
            loop
            muted
            src={getAssetUrl("about/about.mp4")}
            alt="Me typing on a laptop"
            className={styles.aboutVideo}
          />
        </div>
      </div>
    </section>
  );
};
