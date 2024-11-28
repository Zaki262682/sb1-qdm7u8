import React from 'react';
import { useCart } from '../store/useCart';
import { CheckoutForm } from './checkout/CheckoutForm';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Add some items to your cart to proceed with checkout</p>
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};