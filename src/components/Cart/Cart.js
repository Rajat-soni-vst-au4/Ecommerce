import React,{useContext}  from 'react';
import classes from "./Cart.module.css";
import Modal from '../UI/Modal';
import Button from 'react-bootstrap/Button';
import CartContext from '../Store/CartContext';
import CartItem from "./CartItem";


function Cart(props) {
  const ctx = useContext(CartContext);
  // console.log(ctx.items)

  const totalAmount=`$${ctx.totalAmount.toFixed(2)}`;
  const hasItems=ctx.items.length > 0;

  const cartItemRemoveHandler=(id)=>{
    ctx.removeItem(id);
  }
  const cartItemAddHandler=(item)=>{
    ctx.addItem(item);
  }

    const cartItems=<ul className={classes['cart-items']}>{ctx.items.map((item)=>(
       <CartItem 
        key={item.id}
        name={item.name} 
        amount={item.amount}
        price={item.price} 
        image={item.image}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
      />
    ))}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      
      <Button variant="warning" onClick={props.onClose}>Close</Button>{' '}
      <Button variant="primary">PURCHASE</Button>{' '}
    
    </Modal>
  )
}

export default Cart