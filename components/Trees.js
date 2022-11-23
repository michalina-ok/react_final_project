

function Trees(props) {
    const trees = Math.round(props.inputs / 2000);
  return (
    <div className="trees">
        <h2></h2>
        <p>The result is {props.inputs}g of CO2 and trees {trees}</p>
        <img src="/tree.svg"></img>
        </div>
  )
}

export default Trees