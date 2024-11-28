import React from 'react';
import { useCart } from '../../store/useCart';
import { Package, Truck } from 'lucide-react';

export const OrderSummary: React.FC = () => {
  const { items } = useCart();
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
        
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2 text-green-600">
            <Package size={20} />
            <span>Free shipping on all orders</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Truck size={20} />
            <span>Cash on Delivery Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};