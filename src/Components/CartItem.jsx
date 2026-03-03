import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/cartSlice';
import { LuTrash2 } from 'react-icons/lu';
import { FaMinus, FaPlus } from 'react-icons/fa';
import useFetchProducts from '../hooks/UseFetchProduct';

function CartItem({item}) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-stone-200 rounded-2xl">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-xl bg-stone-100"
        referrerPolicy="no-referrer"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm truncate">{item.title}</h3>
        <p className="text-stone-500 text-sm font-medium">${item.price}</p>
      </div>

      <div className="flex items-center gap-2 bg-stone-100 rounded-xl p-1">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
          className="p-1 hover:bg-white rounded-lg transition-colors disabled:opacity-50"
          disabled={item.quantity <= 1}
        >
          <FaMinus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          className="p-1 hover:bg-white rounded-lg transition-colors"
        >
          <FaPlus className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
      >
        <LuTrash2 className="w-5 h-5" />
      </button>
    </div>
  );
}

export default CartItem;
