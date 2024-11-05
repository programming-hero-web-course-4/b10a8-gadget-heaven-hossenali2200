import React, { useContext, useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const { cartItems, wishlistItems, addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(item => item.product_id === productId);
        setProduct(foundProduct);
      })
      .catch(error => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const isInCart = cartItems.some(item => item.product_id === product.product_id);
  const isInWishlist = wishlistItems.some(item => item.product_id === product.product_id);

  return (
    <div>
      <div className="bg-purple-600 lg:h-[600px] h-[400px] relative">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-lg font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Product Details
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-white">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:ml-[200px] flex flex-col md:flex-row items-start p-4 bg-white shadow-lg rounded-lg absolute top-[400px]">
        {/* Left Side - Product Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img 
            src={product.product_image} 
            alt={product.product_title} 
            className="w-full h-[500px] object-cover rounded-md" 
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-2">{product.product_title}</h1>
          <p className="text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-lg font-semibold text-green-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Specification List */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {product.Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Availability and Rating */}
          <p className="mb-4">
            <strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="mb-4">
          <Rating
    initialRating={product.rating}
    readonly
    emptySymbol={<FaStar className="text-gray-300" />}
    fullSymbol={<FaStar className="text-yellow-500" />}
  />
  <span className="ml-2 text-gray-600">{product.rating} / 5</span>
          </p>

          {/* Action Buttons */}
          <div className='flex gap-3 justify-start items-center'>
            <button 
              onClick={() => addToCart(product)} 
              className={`mt-6 px-4 py-2 rounded ${isInCart ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`} 
              disabled={isInCart}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
            
            <button 
              onClick={() => addToWishlist(product)} 
              className={`border-2 rounded-full p-2 mt-6 ${isInCart ? 'bg-gray-400' : 'cursor-pointer'}`} 
              disabled={isInCart || isInWishlist}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
