import Header from "../components/Header";
import Form from "../components/Form";
import Results from "../components/Results";
import InfoSection from "../components/InfoSection";
import AnimationSection from "../components/AnimationSection";
import InfoText from "../components/InfoText";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState(null);

  function getInputs(values) {
    // do stuf with values
    const final = {
      input1: values.input1 * 26 * 52,
      input2: values.input2 * 17 * 52,
      input3: values.input3 * 0.3 * 52,
    };

    const afp = final.input1 + final.input2 + final.input3;

    setInputs(afp);
  }

  return (
    <>
      <Header />
      <div className="hero_layout">
        <h1>Carbon Calculator</h1>
        <Form getInputs={getInputs} />
        <Results inputs={inputs} />
      </div>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </>
  );
}
