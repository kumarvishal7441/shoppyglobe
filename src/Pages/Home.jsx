import React from 'react';
import ProductList from '../Components/ProductList';

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Discover the Best Deals at ShoppyGlobe
          </h1>
          <p className="text-stone-300 mb-8">
            Shop the latest trends in electronics, fashion, and more with our curated collection of premium products.
          </p>
          <button className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors">
            Shop Now
          </button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
          <img 
            src="https://picsum.photos/seed/shopping/800/600" 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
