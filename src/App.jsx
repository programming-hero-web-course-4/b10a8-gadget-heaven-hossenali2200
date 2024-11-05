import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import Products from "./components//Products";  
import ProductDetail from "./components/ProductDetail"; // Adjust if located elsewhere
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="w-11/12 mx-auto mt-4">
       <ToastContainer position="top-center" autoClose={2000} />
       

       <Header/>
      <div className="mb-[300px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>

        
     
    </div>
  );
}

export default App;
