import React,{ useContext } from 'react'
import Button from 'react-bootstrap/Button';
import classes from "./HeaderCartButton.module.css"
import CartContext from "../Store/CartContext";

const HeaderCartButton=(props)=>{
  const ctx = useContext(CartContext);

  const numberOfCartItems=ctx.items.reduce((currNumber,item)=>{
    return currNumber+item.amount;
  },0);

  return (
    <>
      <Button variant="outline-primary" onClick={props.onClick}>
        <span className={classes.icon}>
        </span>
        <span className={classes.title}>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </Button>{" "}
    </>
  )
}

export default HeaderCartButton
