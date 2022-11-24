import { useState } from "react";
import Planes from "./Planes";
import Form from "./Form";

function Trees(props) {
    const trees = Math.round(props.inputs / 2000);
    const [page, setPage] = useState("Planes");

    const pages = {
      Trees: <Trees />,
      Planes: <Planes />,
      Form: <Form />,
    };
  return (
    <div className="trees">
        <h2>Total yearly footprint is {props.inputs}g of CO2</h2>
        <p>To offset this amount of CO2 {trees} trees need to be planted</p>
        <a href="#" onClick={() => setPage("Planes")}>
        <p>Click here to see the planes</p>
        </a>
        
        <img src="/tree.svg" alt="Icon of a tree"></img>
        {pages[page]}
        </div>
      
  )
}

export default Trees