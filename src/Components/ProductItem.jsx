import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { CiStar } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
      <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden bg-stone-100 relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
          <CiStar className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <Link to={`/product/${product.id}`} className="text-sm font-semibold hover:underline line-clamp-1 mb-1">
            {product.title}
          </Link>
          <p className="text-xs text-stone-500 line-clamp-2 mb-3">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail
            }))}
            className="bg-stone-900 text-white p-2 rounded-xl hover:bg-stone-800 transition-colors"
            aria-label="Add to cart"
          >
            <FaPlus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
