import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, loadCart } from "../redux/cartSlice";
import { Container, Table, Button } from "react-bootstrap";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id; // Extract only `id` to avoid unnecessary re-renders

  useEffect(() => {
    if (userId) {
      dispatch(loadCart({ userId }));
    }
  }, [dispatch, userId]); // Now depending only on `userId`, satisfying ESLint

  if (!userId) {
    return <Container className="mt-4"><h2>Please log in to view your cart.</h2></Container>;
  }

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
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} width="50" height="50" />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <Button variant="light" onClick={() => dispatch(decreaseQuantity({ userId, itemId: item.id }))}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="light" onClick={() => dispatch(increaseQuantity({ userId, itemId: item.id }))}>+</Button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => dispatch(removeFromCart({ userId, itemId: item.id }))}>
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
