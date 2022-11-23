import Trees from "./Trees";

function Results(props) {
  console.log(props.inputs);

  return (
    <>
   
      <section className="results">
      {!props.inputs &&  <h2>Hi hi try the calculator</h2>}
        {props.inputs && <Trees inputs={props.inputs}  />}
      </section>
    </>
  );
}

export default Results;
