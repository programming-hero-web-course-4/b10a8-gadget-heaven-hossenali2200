import React from 'react'
import { Helmet } from 'react-helmet-async'
 
import { ComposedChart, Bar, Area, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { product_title: "MacBook Pro 16-inch", price: 2499.99, rating: 4.8 },
  { product_title: "iPhone 14 Pro Max", price: 1199.99, rating: 4.9 },
  { product_title: "Samsung Galaxy S22", price: 999.99, rating: 4.7 },
  { product_title: "Apple Watch Series 8", price: 399.99, rating: 4.6 },
  { product_title: "Dell XPS 13", price: 1099.99, rating: 4.7 },
  { product_title: "Acer Predator Helios 300", price: 799.99, rating: 4 },
  { product_title: "Lenovo ThinkPad X1 Carbon", price: 1599.99, rating: 3.5 },
  { product_title: "HP Spectre x360", price: 899.99, rating: 3.7 },
  { product_title: "MacBook Pro 16", price: 1399.99, rating: 4.3 },
  { product_title: "OnePlus Nord", price: 2999.99, rating: 4 },
  { product_title: "Huawei Watch GT 3", price: 999.99, rating: 3.5},
  { product_title: "Sony WH-1000XM4", price: 2000, rating: 3 },
  // Add other products as needed
];

const Statistics = () => {
  return (
    <div> 
      <Helmet>
        <title>Statistic</title>
      </Helmet>

      <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="product_title" tick={{ fontSize: 12 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="price" barSize={20} fill="#413ea0" />
      <Scatter dataKey="rating" fill="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
    </div>
  )
}

export default Statistics