import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux/cartSlice';
import { MdOutlineCheckCircle } from 'react-icons/md';

 function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      dispatch(clearCart());
      navigate('/');
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <MdOutlineCheckCircle className="w-20 h-20 text-emerald-500 mb-6 animate-bounce" />
        <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-stone-500 mb-4">Thank you for shopping with ShoppyGlobe.</p>
        <p className="text-sm text-stone-400">Redirecting to home page...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="text-stone-600 hover:underline">Go back to shopping</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 space-y-4">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Address</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">City</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                  value={formData.city}
                  onChange={e => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">ZIP Code</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                  value={formData.zip}
                  onChange={e => setFormData({...formData, zip: e.target.value})}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold hover:bg-stone-800 transition-all active:scale-[0.98]"
          >
            Place Order (${totalPrice.toFixed(2)})
          </button>
        </form>

        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-stone-50" referrerPolicy="no-referrer" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold line-clamp-1">{item.title}</p>
                    <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-100 pt-6 space-y-2">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Shipping</span>
                <span className="text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between font-bold text-xl pt-2">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;