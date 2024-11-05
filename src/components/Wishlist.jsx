// src/components/Wishlist.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CiCircleRemove } from 'react-icons/ci';



const Wishlist = () => {
  const { wishlistItems, addToCart, removeFromWishlist } = useContext(CartContext);

  return (
    <div className="wishlist">
      {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <div className='flex justify-between mt-4 bg-slate-100 border rounded-2xl p-3'>
             <div key={item.product_id} className="wishlist-item cart-item flex justify-around gap-4">
            <img className='w-[300px] h-[200px]' src={item.product_image} alt={item.product_title} />
            <div className='flex flex-col items-start text-center mt-16 space-y-3'>
            <h2><strong>{item.product_title}</strong></h2>
            <p><strong>Description: </strong> {item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button onClick={() => addToCart(item)} className='bg-purple-500 text-white text-xl font-semibold rounded-full px-3 py-2'>Add to Cart</button>
            </div>
           
           
          </div>
          <div className='flex items-center'>
          <button onClick={() => removeFromWishlist(item.product_id)}> 
          <CiCircleRemove size={40} className='text-red-500'/>
        </button>
          </div>
          </div>
         
        ))
      ) : (
        <p>Your wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;
