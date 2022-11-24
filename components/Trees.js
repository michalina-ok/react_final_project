import Planes from "./Planes";

function Trees(props) {
  const trees = Math.round(props.inputs / 2000);

  return (
    <>
      <h2>Total yearly footprint is {props.inputs}g of CO2</h2>
      <p>To offset this amount of CO2 {trees} trees need to be planted</p>
      <img src="/tree.svg" alt="Icon of a tree"></img>
    </>
  );
}

export default Trees;
