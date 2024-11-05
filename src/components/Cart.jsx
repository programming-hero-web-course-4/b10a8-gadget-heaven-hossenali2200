import React, { useContext, useState, useEffect } from 'react';
import { MdTune } from "react-icons/md";
import { CartContext } from '../context/CartContext';
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems,removeFromCart, totalCost,clearCart   } = useContext(CartContext);
  const [sortedItems, setSortedItems] = useState(cartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSortedItems(cartItems); // Update sortedItems whenever cartItems changes
  }, [cartItems]);

  const sortByPrice = () => {
    const sorted = [...cartItems].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    clearCart() // Reset total cost
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <div className='flex justify-between w-10/12 mx-auto'>
        <h2 className='text-lg font-semibold'>Cart</h2>
        <div className='flex justify-between items-center gap-3'>
          <div>Total Cost: ${totalCost.toFixed(2)}</div>
          <button onClick={sortByPrice} className='rounded-full flex gap-2 font-semibold border-2 px-3 py-2 text-purple-500 border-purple-500'>
            Sort by price <MdTune className='mt-2' />
          </button>
          <button 
            onClick={handlePurchase} 
            className={`rounded-full text-white font-semibold px-3 py-2 bg-purple-500 ${cartItems.length === 0 || totalCost === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={cartItems.length === 0 || totalCost === 0}
          >
            Purchase
          </button>
        </div>
      </div>

      <div id='show-cart'>
        {sortedItems.map((item) => (
          <div key={item.product_id} className='flex justify-between mt-4 bg-slate-100 border rounded-2xl p-3'>
            <div className="cart-item flex justify-around gap-4">
              <img className='w-[300px] h-[200px]' src={item.product_image} alt={item.product_title} />
              <div className='flex flex-col items-start text-center mt-16'>
                <h3>{item.product_title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.product_id)}> 
              <CiCircleRemove size={40} className='text-red-500'/>
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Purchase Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 text-center">
            <img src="/src/assets/Group.png" alt="Success" className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Payment Successful</h2>
            <hr className="my-4" />
 
            <p className="text-gray-700">Thanks for purchasing!</p>
            <button onClick={closeModal} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
