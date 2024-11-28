import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store, Home, Package, Heart } from 'lucide-react';
import { useCart } from '../store/useCart';

export const Navbar: React.FC = () => {
  const items = useCart((state) => state.items);
  const location = useLocation();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">EasyShop</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home size={20} />} label="Home" isActive={isActive('/')} />
            <NavLink to="/products" icon={<Package size={20} />} label="Products" isActive={isActive('/products')} />
            <NavLink to="/wishlist" icon={<Heart size={20} />} label="Wishlist" isActive={isActive('/wishlist')} />
          </div>

          <Link 
            to="/cart" 
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-2">
          <MobileNavLink to="/" icon={<Home size={20} />} label="Home" isActive={isActive('/')} />
          <MobileNavLink to="/products" icon={<Package size={20} />} label="Products" isActive={isActive('/products')} />
          <MobileNavLink to="/cart" icon={<ShoppingCart size={20} />} label="Cart" isActive={isActive('/cart')} count={itemCount} />
          <MobileNavLink to="/wishlist" icon={<Heart size={20} />} label="Wishlist" isActive={isActive('/wishlist')} />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
      isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  count?: number;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, icon, label, isActive, count }) => (
  <Link
    to={to}
    className={`flex flex-col items-center space-y-1 px-3 py-1 relative ${
      isActive ? 'text-blue-600' : 'text-gray-600'
    }`}
  >
    {icon}
    <span className="text-xs">{label}</span>
    {count !== undefined && count > 0 && (
      <span className="absolute -top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        {count}
      </span>
    )}
  </Link>
);