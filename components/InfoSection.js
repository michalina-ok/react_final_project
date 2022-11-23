import InfoText from "./InfoText";
import AnimationSection from "./AnimationSection";
import React, { useState, useEffect } from "react";

function InfoSection() {
  const [illustration, setIllustration] = useState("");
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  useEffect(() => {
    if (scrollY <= 850) {
      setIllustration("");
    } else if (scrollY < 1500) {
      setIllustration("fullText");
    } else {
      setIllustration("eraseText");
      // eraseTextOnce();
    }
  }, [scrollY]);

  return (
    <section id="infoSection" className="info">
      <AnimationSection illustration={illustration}></AnimationSection>
      <InfoText></InfoText>
    </section>
  );
}

export default InfoSection;

// let string;
// let char;
// let maxChar;
// const text = document.querySelector(".eraseText");

// function eraseTextOnce() {
//   string = text.textContent.toString();
//   console.log(string);
//   maxChar = string.length;
//   char = maxChar;
//   erase();
// }
// function erase() {
//   if (maxChar >= char) {
//     let erasingText;
//     erasingText = string[maxChar - char];
//     text.textContent -= erasingText;
//     char--;
//   }
// }
