import React, {useContext, useEffect} from "react";
import CartContext from '../Store/CartContext';
import productsArr from "./ProductList";

import { Container, Row, Button, Col } from 'react-bootstrap';


const AvailableProducts=()=>{

const ctx = useContext(CartContext);

  const btnClickHandler=(item)=>{
    ctx.addItem({
      id: item.title, // pass the item's id instead of generating a new one
      name: item.title,
      price: item.price,
      image : item.imageUrl,
      amount: Number(item.amount),
    });
  }

  return (
    <>
      <Container>
        <Row>
        {productsArr.map((item) => (
            <Col key={item.title} id={item.id} xs={12} md={3}  lg={3}>
             
                <h3>{item.title}</h3>
                <div>
                    <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <span>${item.price}</span>
                  <Button variant="primary" onClick={()=>btnClickHandler(item)}>Add To Cart</Button>
                </div>
             
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AvailableProducts
