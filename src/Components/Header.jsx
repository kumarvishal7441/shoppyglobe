import React from 'react';
// import { ShoppingCart, Search, Store } from 'lucide-react'; 
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../Redux/productSlice';
import { IoStorefrontOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

 function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const dispatch = useDispatch();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-stone-900">
          <IoStorefrontOutline className="w-6 h-6" />
          <span>ShoppyGlobe</span>
        </Link>

        <div className="flex-1 max-w-md relative">
          <CiSearch  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 bg-stone-100 border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-stone-200 transition-all outline-none text-sm"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-stone-600 transition-colors">Home</Link>
          <Link to="/cart" className="relative p-2 hover:bg-stone-100 rounded-full transition-colors">
            <CiShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;