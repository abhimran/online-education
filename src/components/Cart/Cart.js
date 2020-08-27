import React from 'react';
import './Cart.css';
import {Button, Card } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const subtotal = cart.reduce((total, course)=> total+course.price, 0);

    const tax = (subtotal / 12).toFixed(2);
    const total = subtotal + Number(tax);
    return (
        <div className="cart">
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>Order Summery</Card.Header>
                <Card.Body>
                <Card.Title>You Enrolled: {cart.length}</Card.Title>
                <Card.Text>
                    Subtotal: ${subtotal}
                    <br/>
                    Tax: ${tax}
                    <br/>
                    Total Amount: ${total.toFixed(2)}
                    <br/>
                    <br/>
                     <Button varient="success">Review Your Order</Button>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;