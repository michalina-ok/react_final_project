import Trees from "./Trees";
import Planes from "./Planes";

function Results(props) {
  console.log(props.inputs);

  return (
    <>
    
   
      <section className="results">
      {!props.inputs &&  <h2>Hi hi try the calculator</h2>}
        {props.inputs && <Trees inputs={props.inputs}  />}
        {props.inputs && <Planes inputs={props.inputs} />}
      </section>
    </>
  );
}

export default Results;
