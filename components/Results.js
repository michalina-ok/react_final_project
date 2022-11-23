function Results(props) {
    //const [result, setResult] = useState(null);
console.log(props.inputs)
  return (
  <>
   <section className="results">
        <h2>Hi hi try the calculator</h2>
        <p>The result is {props.inputs}</p>
      </section>
  </>
  )
}

export default Results