import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Shop() {
   const dispatch = useDispatch()
   const amount = useSelector((state) => state.amount);
   const {withDrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withDrawMoney(100))}}>-</button>
      Update Account Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

      {/* <button className="btn btn-primary mx-2" onClick={()=>{actions.withDrawMoney(100)}}>-</button>
      Update Account Balance
      <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button> */}

    <button className="btn btn-primary mx-2" onClick={()=>{withDrawMoney(100)}}>-</button>
      Update Account ${amount}.00
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  );
}

export default Shop;
