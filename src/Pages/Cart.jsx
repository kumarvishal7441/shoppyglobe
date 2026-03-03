import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import { FaShoppingBag } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="bg-stone-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaShoppingBag className="w-10 h-10 text-stone-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-white border border-stone-200 rounded-3xl p-6 h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-stone-500">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>
            <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Link 
            to="/checkout" 
            className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all"
          >
            Checkout
            <FaArrowRightLong className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
