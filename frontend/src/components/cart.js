import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import { Container, Table, Button } from "react-bootstrap";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}> {/* Use product ID as key */}
                <td>
                  <img src={item.image} alt={item.name} width="50" height="50" />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <Button variant="light" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="light" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
