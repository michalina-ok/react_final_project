import Trees from "./Trees";
import Planes from "./Planes";
import Laptop from "./Laptop";
import { useState } from "react";

function Results(props) {
  const [result, setresult] = useState(null);
  let component = <Trees inputs={props.inputs} />;

  if (result === "planes") {
    component = <Planes inputs={props.inputs} />;
  }
  if (!props.inputs) {
    return (
      <>
        <section className="results">
          <Laptop />
        </section>
      </>
    );
  } else {
    return (
      <>
        <a href="#" onClick={() => setresult("trees")}>
          arrow
        </a>
        {component}
        <a href="#" onClick={() => setresult("planes")}>
          arrow
        </a>
      </>
    );
  }
}

export default Results;
