import React from 'react';
import { useSelector } from 'react-redux';
import useFetchProducts from '../hooks/UseFetchProduct';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { data: products, loading, error } = useFetchProducts('https://dummyjson.com/products');
  const searchQuery = useSelector((state) => state.products.searchQuery);

  if (loading) return null;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      {filteredProducts.length === 0 && (
        <div className="col-span-full text-center py-20 text-stone-500">
          No products found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}
