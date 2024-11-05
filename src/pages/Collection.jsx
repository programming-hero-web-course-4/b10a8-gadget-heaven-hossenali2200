import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all products
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter products based on the search query
  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.product_title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products); // Show all products if the search field is empty
    }
  }, [searchQuery, products]);

  return (
    <div className="p-4">
      <Helmet>
        <title>Collection</title>
      </Helmet>
      {/* Search Field */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 mb-4 w-1/2 mx-auto flex items-center"
      />

      {/* Products Grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
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
            {/* Additional product details or buttons */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
