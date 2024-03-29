import React from "react";
import img from "../assets/Leaves.jpg";
import "./Style.css";

function Img() {
    return (
        <img src={img} className="img" alt="image"></img>
    )
}

export default Img;