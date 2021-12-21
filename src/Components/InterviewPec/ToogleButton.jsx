import React, { useState } from "react";

const ToogleButton = () => {
  const [color, setColor] = useState("green");
  const [clr, setClr] = useState("yellow");

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <button onClick={() => setColor(color === "cyan" ? "green" : "cyan")}>
          {color === "cyan" ? "Color Me to green" : "Color Me to cyan"}
        </button>
      </div>
      <div style={{ backgroundColor: clr }}>
        <button onClick={() => setClr(clr === "grey" ? "yellow" : "grey")}>
          {color === "grey" ? "on" : "of"}
        </button>
      </div>
    </div>
  );
};

export default ToogleButton;
