import React, { useEffect } from "react";
function AnimationSection(props) {
  useEffect(() => {
    if (props.illustration === "fullText") {
      document.querySelector(".eraseText").classList.add("hideContent");
      document.querySelector(".fullText").classList.remove("hideContent");
      document.querySelector(".fullText").classList.add("fade-in");
    } else if (props.illustration === "eraseText") {
      document.querySelector(".fullText").classList.add("hideContent");
      document.querySelector(".eraseText").classList.remove("hideContent");
      document.querySelector(".eraseText").classList.add("erase-text");
    } else {
      document.querySelector(".eraseText").classList.add("hideContent");
      document.querySelector(".fullText").classList.add("hideContent");
    }
  });
  return (
    <section className="animation">
      <div>
        <h2 className="fullText hideContent">Thank you</h2>
        <h2 className="eraseText hideContent">Thank you</h2>
      </div>
    </section>
  );
}

export default AnimationSection;
