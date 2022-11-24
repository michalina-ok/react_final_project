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
      <div className="results">
        <a className="resTree" href="#hero" onClick={() => setresult("trees")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </a>
        {component}
        <a className="resPlane" href="#hero" onClick={() => setresult("planes")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </a>
      </div>
    );
  }
}

export default Results;
