import React, { useState } from 'react';
import Products from './Products';

const categoryList = ["All Products", "Laptops", "Phone", "Accessories", "SmartWatch", "Macbook", "Iphone"];

const Feature = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mt-[300px]"> 
      <div className='mb-20 flex justify-center'>
        <h2 className='text-3xl font-bold'>Explore Cutting-Edge Gadgets</h2>
      </div>
      
      <section className="flex justify-between gap-2">
        <div className="lg:w-[200px] w-1/3">  
           

          <div className="flex flex-col gap-1">
            {categoryList.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer bg-gray-300 text-black px-3 py-2 m-4 text-center rounded-full 
                            ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-[1400px] w-2/3">
           <Products selectedCategory={selectedCategory} />
        </div>
      </section>
    </div>
  );
};

export default Feature;
