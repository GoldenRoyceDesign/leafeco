import { createSlice } from "@reduxjs/toolkit";

// Helper functions to handle cart storage per user
const getCartKey = (userId) => `cart_${userId}`;

const loadCartFromLocalStorage = (userId) => {
  try {
    const storedCart = localStorage.getItem(getCartKey(userId));
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (userId, cart) => {
  try {
    localStorage.setItem(getCartKey(userId), JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const initialState = {
  cartItems: [],
  userId: null, // Track which user the cart belongs to
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    loadCart: (state, action) => {
      const { userId } = action.payload;
      state.userId = userId;
      state.cartItems = loadCartFromLocalStorage(userId);
    },
    addToCart: (state, action) => {
      const { userId, id, name, image, price, quantity } = action.payload;
      state.userId = userId;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        state.cartItems.push({ id, name, image, price, quantity });
      }
      saveCartToLocalStorage(userId, state.cartItems);
    },
    removeFromCart: (state, action) => {
      const { userId, itemId } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      saveCartToLocalStorage(userId, state.cartItems);
    },
    increaseQuantity: (state, action) => {
      const { userId, itemId } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(userId, state.cartItems);
      }
    },
    decreaseQuantity: (state, action) => {
      const { userId, itemId } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(userId, state.cartItems);
      }
    },
    clearCart: (state, action) => {
      const { userId } = action.payload || {};
      if (!userId) {
        console.warn("clearCart called without userId.");
        return;
      }
      state.cartItems = [];
      localStorage.removeItem(getCartKey(userId));
    }
    
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  loadCart,
  setCart,
} = cartSlice.actions;
export default cartSlice.reducer;




// // Helper functions to handle cart storage
// const loadCartFromLocalStorage = () => {
//   try {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   } catch (error) {
//     console.error("Error loading cart from localStorage:", error);
//     return [];
//   }
// };

// const saveCartToLocalStorage = (cart) => {
//   try {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   } catch (error) {
//     console.error("Error saving cart to localStorage:", error);
//   }
// };

// // Initial state
// const initialState = {
//   cartItems: loadCartFromLocalStorage(), // Load cart on app start
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].quantity += action.payload.quantity;
//       } else {
//         state.cartItems.push({ ...action.payload, quantity: action.payload.quantity });
//       }
//       saveCartToLocalStorage(state.cartItems);
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
//       saveCartToLocalStorage(state.cartItems);
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//         saveCartToLocalStorage(state.cartItems);
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.cartItems.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//         saveCartToLocalStorage(state.cartItems);
//       }
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       localStorage.removeItem("cart");
//     },
//     loadCart: (state) => {
//       state.cartItems = loadCartFromLocalStorage();
//     },
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, loadCart } = cartSlice.actions;
// export default cartSlice.reducer;
