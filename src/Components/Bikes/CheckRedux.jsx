import React from "react";
import { useDispatch, useSelector } from "react-redux";    ///// this is a redux file data
import { Button } from "react-bootstrap";
const CheckRedux = () => {
  const selectdata = useSelector((state) => state.ProductsReducer.products);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: "ADD_PRODUCTS",
      data: ["Cat", "Bat", "Fat"],
    }); 
  };
  return (
    <div>
      <Button onClick={handleClick}>Dispatch me</Button>
      {selectdata.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default CheckRedux;
