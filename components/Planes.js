function Planes(props) {
  const planes = Math.round(props.inputs / 2000);
  return (
    <div className="trees">
      <h2>Total yearly footprint is {props.inputs}g of CO2</h2>
      <p>This is an equivalent of flying {planes} miles</p>
      <div className="circleBackground">
        <img src="/plane.svg" alt="Icon of a plane"></img>
      </div>
    </div>
  );
}

export default Planes;
