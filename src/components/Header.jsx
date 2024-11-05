import React, { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems, wishlistItems } = useContext(CartContext);
  const [visible, setVisible] = useState(false); // state to control sidebar visibility
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const headerStyles = isHomePage ? 'bg-purple-600 text-white' : 'bg-white text-black';

  return (
    <div className={`${headerStyles}`}>
      <div className='flex items-center justify-between py-5 font-medium w-10/12 mx-auto'>
        <Link to='/'>
          <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
        </Link>

        {/* Desktop navigation */}
        <ul className='hidden sm:flex gap-5 text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex flex-col gap-1 items-center font-semibold ${isActive ? 'underline underline-offset-4 decoration-gray-700' : ''}`
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to='/collection'
            className={({ isActive }) =>
              `flex flex-col gap-1 items-center font-semibold ${isActive ? 'underline underline-offset-4 decoration-gray-700' : ''}`
            }
          >
            <p>Collection</p>
          </NavLink>
          <NavLink
            to='/statistics'
            className={({ isActive }) =>
              `flex flex-col gap-1 items-center font-semibold ${isActive ? 'underline underline-offset-4 decoration-gray-700' : ''}`
            }
          >
            <p>Statistics</p>
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              `flex flex-col gap-1 items-center font-semibold ${isActive ? 'underline underline-offset-4 decoration-gray-700' : ''}`
            }
          >
            <p>Dashboard</p>
          </NavLink>
        </ul>

        {/* Cart and wishlist icons */}
        <div className='flex items-center gap-2'>
          <div className='relative border-gray-400 rounded-full p-2 border-2'>
            <Link to='/cart'>
              <AiOutlineShoppingCart />
              {cartItems.length > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs'>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          <div className="relative border-gray-400 rounded-full p-2 border-2">
            <Link to='/wishlist'>
              <FaRegHeart />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Menu button for small screens */}
        <button
          onClick={() => setVisible(!visible)}
          className='sm:hidden text-2xl'
        >
          <TbMenuDeep />
        </button>
      </div>

      {/* Sidebar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <TbMenuDeep />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/statistics'>Statistics</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/dashboard'>Dashboard</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
