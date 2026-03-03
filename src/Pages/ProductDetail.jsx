import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { CiDeliveryTruck, CiStar } from 'react-icons/ci';
import { FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import { LuShieldCheck } from 'react-icons/lu';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900"></div>
    </div>
  );

  if (error || !product) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-4">Oops! {error || 'Product not found'}</h2>
      <button onClick={() => navigate('/')} className="text-stone-600 hover:underline">Back to home</button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-white rounded-3xl border border-stone-200 overflow-hidden">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-full object-contain p-8"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm font-bold">
                <CiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {product.rating}
              </div>
              <span className="text-stone-300">|</span>
              <span className="text-sm text-stone-500">Free Shipping</span>
            </div>
          </div>

          <div className="text-4xl font-bold mb-8">${product.price}</div>

          <p className="text-stone-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-stone-100 rounded-2xl">
              <CiDeliveryTruck className="w-5 h-5 text-stone-500" />
              <div className="text-xs">
                <p className="font-bold">Fast Delivery</p>
                <p className="text-stone-500">2-4 business days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-stone-100 rounded-2xl">
              <LuShieldCheck className="w-5 h-5 text-stone-500" />
              <div className="text-xs">
                <p className="font-bold">Warranty</p>
                <p className="text-stone-500">1 year protection</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => dispatch(addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail
            }))}
            className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all active:scale-[0.98]"
          >
            <FaShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
