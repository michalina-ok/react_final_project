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
  console.log(scrollY);
  useEffect(() => {
    if (scrollY <= 1400) {
      setIllustration("");
    } else if (scrollY < 2000) {
      setIllustration("fullText");
    } else {
      setIllustration("eraseText");
    }
  }, [scrollY]);
  const [aniPosition, setAniPosistion] = useState("relative");
  useEffect(() => {
    if (scrollY < 1500) {
      setAniPosistion("sticky-top");
    } else if (scrollY > 3500) {
      setAniPosistion("sticky-end");
    } else {
      setAniPosistion("fixed");
    }
  }, [scrollY]);
  return (
    <section id="infoSection" className="info">
      <AnimationSection illustration={illustration} position={aniPosition}></AnimationSection>
      <InfoText></InfoText>
    </section>
  );
}

export default InfoSection;
