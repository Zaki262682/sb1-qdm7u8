import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../store/useWishlist';
import { useCart } from '../store/useCart';

export const Wishlist: React.FC = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-600">Start adding items you love to your wishlist!</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => addItem(product)}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeItem(product.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};