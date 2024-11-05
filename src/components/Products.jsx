import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory === "All Products") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 p-4">
      {filteredProducts.map((product) => (
        <div key={product.product_id} className="bg-slate-100 border rounded-lg shadow-lg p-4">
          <img 
            src={product.product_image} 
            alt={product.product_title} 
            className="w-full h-60 object-cover rounded-md mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">{product.product_title}</h2>
          <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.product_id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
