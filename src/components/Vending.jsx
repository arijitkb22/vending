import React, { useState } from "react";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";

export default function Vending() {
  const [calval, setCalVal] = useState("");
  const [animate, setAnimate] = useState(true);
  const [avalBeer, setAvlBeer] = useState(99);
  const handleOnClick = (name) => {
    if (name === "Clear") {
      setCalVal("");
    } else if (name === "Get") {
      const value = parseInt(calval);
      if(value>=avalBeer) {
        alert("Please keep 1 beer left for me :)");
        return;
      }

      setAvlBeer(avalBeer - parseInt(calval));
      setCalVal("");
      animationStart()
    } else if (name === "=") {
      const res = eval(calval);
      setCalVal(res);
    } else {
      const newVal = `${calval}${name}`;
      setCalVal(newVal);
    }
  };

  const animationStart = () =>{
    console.log("called...");
    setAnimate("flow-beer");
    console.log(animate);

    setTimeout(setAnimate("beer"), 5000);
  }

  return (
    <>
    
      <img
        className={animate ? "flow-beer" : "beer"}
        src="src\assets\beer-s.png"
      />
      <h2 className="header">Get your Beer Here</h2>
      <div className="machine">
      {avalBeer==1? <div className="warning"><h3>Only one Beer available</h3></div> :<h3 className="available">Available Beer: {avalBeer} </h3>}
        <Display calval={calval} />
        <ButtonContainer handleOnClick={(event) => handleOnClick(event)} />

        
      </div>
    </>
  );
}
