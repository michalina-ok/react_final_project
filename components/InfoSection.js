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
    if (scrollY <= 750) {
      setIllustration("");
    } else if (scrollY < 1500) {
      setIllustration("fullText");
    } else {
      setIllustration("eraseText");
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
