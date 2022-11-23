import Header from "../components/Header";
import Form from "../components/Form";
import Results from "../components/Results";
import InfoSection from "../components/InfoSection";
import AnimationSection from "../components/AnimationSection";
import InfoText from "../components/InfoText";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  //const [result, setResult] = useState(null);
  const [inputs, setInputs] = useState({});

  function getInputs(values) {
    // do stuf with values
    const final = {
      input1: values.input1 * 26 * 52,
      input2: values.input2 * 17 * 52,
      input3: values.input3 * 0.3 * 52,
    };

    const afp = final.input1 + final.input2 + final.input3;

    console.log(final);
    console.log(afp);

    setInputs(final);
  }

  return (
    <>
      <Header />
      <div className="hero_layout">
        <Form getInputs={getInputs} />
        <Results />
      </div>
      <InfoSection>
        <AnimationSection />
        <InfoText />
      </InfoSection>
      <Footer></Footer>
    </>
  );
}
