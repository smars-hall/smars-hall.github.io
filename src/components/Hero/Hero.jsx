import React from "react";

import styles from "./Hero.module.css";
import { getAssetUrl } from "../../utils";

export const Hero = ({japanese, setNav}) => {
  let title = "", description = "";
  if(japanese === true) {
    title = "初めまして、\nシャノンです。";
    description = "東京に住んでいるアメリカのソフトウエアエンジニアです。\nUI/UX、綺麗なコード、ゲームに情熱を注いています。";
  }
  else { // English
    title = "Hey, I'm Shannon";
    description = "I'm an American software engineer currently based in Tokyo, Japan that's passionate about UI/UX, clean code, and gaming.";
  }

  return (
    <section className={styles.container} id="hero" onMouseEnter={() => setNav(1)}>
      <div className={styles.imgContainer}>
        <img
          src={getAssetUrl("hero/heroImage.png")}
          alt="Image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${japanese ? styles.smallJapaneseTitle : ""}`}>{title}</h1>
        <p className={`${styles.description} ${japanese ? styles.smallJapaneseDesc : ""}`}>{description}</p>
      </div>
      <div className={styles.spotlight} />
    </section>
  );
};
