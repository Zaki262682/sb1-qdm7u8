import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../store/useCart';
import { useWishlist } from '../store/useWishlist';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCart((state) => state.addItem);
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            inWishlist 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:text-red-500'
          } shadow-md transition-colors`}
        >
          <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold flex-1">{product.name}</h3>
          <span className="text-blue-600 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
          {product.category}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};