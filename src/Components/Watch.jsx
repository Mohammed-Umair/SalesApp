import React, { useState, useEffect } from "react";

const Watch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  useEffect(() => {
    let mySec = sec + 1;
    if (mySec === 60) {
      mySec = 0;
    }
    setTimeout(() => setSec(mySec), 50);
  }, [sec]);
  useEffect(() => {
    let myMin = min + 1;
    if (myMin === 60) {
      myMin = 0;
    }
    setTimeout(() => setMin(myMin), 100 * 60);
  }, [sec]);

  return (
    <div>
      <h1>
        <b>Watch Time</b>= {sec}:{min}
      </h1>
    </div>
  );
};

export default Watch;
