import React from 'react';
import { useForm } from '../hooks/useForm';
import { Input } from './Input';
import { OrderSummary } from './OrderSummary';
import { useCart } from '../../store/useCart';
import { useNavigate } from 'react-router-dom';

export const CheckoutForm: React.FC = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  const { values, errors, handleChange, handleSubmit, isValid } = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      notes: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.firstName) errors.firstName = 'First name is required';
      if (!values.lastName) errors.lastName = 'Last name is required';
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.phone) errors.phone = 'Phone number is required';
      if (!values.address) errors.address = 'Address is required';
      if (!values.city) errors.city = 'City is required';
      if (!values.postalCode) errors.postalCode = 'Postal code is required';
      return errors;
    },
    onSubmit: (values) => {
      // Simulate order processing
      setTimeout(() => {
        alert('Order placed successfully! Thank you for your purchase.');
        clearCart();
        navigate('/');
      }, 1000);
    }
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Input
            label="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
            error={errors.address}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              error={errors.city}
            />
            <Input
              label="Postal Code"
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              error={errors.postalCode}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={values.notes}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              isValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Place Order
          </button>
        </form>
      </div>
      <OrderSummary />
    </div>
  );
};