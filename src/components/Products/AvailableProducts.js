import React, {useContext} from "react";
import classes from "./AvailableProducts.module.css"
import CartContext from '../Store/CartContext';
import productsArr from "./ProductList";

import { Container, Row, Button, Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const AvailableProducts=()=>{

const ctx = useContext(CartContext);

  const btnClickHandler=(item)=>{
    ctx.addItem({
      id: item.id, // pass the item's id instead of generating a new one
      name: item.title,
      price: item.price,
      image : item.imageUrl,
      amount: Number(item.amount),
    });
  }

  return (
    <>
    <h1 className={classes.Label}>The Generics</h1>
      <Container>
        <Row>
        {productsArr.map((item) => (
            <Col key={item.id} md={6} lg={6} xl={3} className="mb-4">
              <Card className="shadow-lg">
              <Link to={`/product/${encodeURIComponent(item.imageUrl)}`}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="success" onClick={() => btnClickHandler(item)}>
                    ADD TO CART
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <h1 className={classes.bottom}>The Generics</h1>
    </>
  )
}

export default AvailableProducts
