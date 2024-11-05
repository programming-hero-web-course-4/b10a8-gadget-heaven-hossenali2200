import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (product) => {
    if (!cartItems.find(item => item.product_id === product.product_id)) {
      setCartItems(prevItems => [...prevItems, product]);
      toast.success("Product add to cart successfully")
      setTotalCost(prevTotal => prevTotal + product.price);

      // Remove from wishlist if it's added to cart
      setWishlistItems(prevItems => prevItems.filter(item => item.product_id !== product.product_id));
    }
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.product_id === product.product_id)) {
      setWishlistItems(prevItems => [...prevItems, product]);
      toast.success("Product add wishlist successfully")
    }
  };

  const removeFromCart = (productId) => {
    const removedItem = cartItems.find(item => item.product_id === productId);
    setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
    toast.info("Product Remove")
    setTotalCost(prevTotal => prevTotal - removedItem.price);
  };
  const clearCart = () => {
    setCartItems([]);
    setTotalCost(0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      wishlistItems, 
      addToCart, 
      addToWishlist, 
      removeFromCart, 
      totalCost ,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
