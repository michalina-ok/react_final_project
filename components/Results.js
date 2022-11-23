function Results(props) {
  //const [result, setResult] = useState(false);
  console.log(props.inputs);
const trees = Math.round(props.inputs / 2000);
  return (
    <>
   
      <section className="results">
      {!props.inputs &&  <h2>Hi hi try the calculator</h2>}
        {props.inputs && <p>The result is {props.inputs}g of CO2 and trees {trees}</p>}
      </section>
    </>
  );
}

export default Results;
