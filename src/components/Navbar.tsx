import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/shared/desktop/logo.svg';
import CartIcon from '@/assets/shared/desktop/icon-cart.svg';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';
import { useCartStore } from '../store/cartStore';

const navLinks = [
  { name: 'HOME', to: '/' },
  { name: 'HEADPHONES', to: '/headphones' },
  { name: 'SPEAKERS', to: '/speakers' },
  { name: 'EARPHONES', to: '/earphones' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useCartStore(state => state.getCartCount());

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isCartOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isCartOpen, mobileMenuOpen]);

  return (
    <nav className='w-full bg-foreground text-white z-50 fixed'>
      <div className='max-w-7xl mx-auto relative'>
        {/* Desktop/Tablet Nav */}
        <div className='hidden md:block'>
          <div className='max-w-7xl mx-auto my-4 px-6'>
            <div className='flex items-center justify-between w-full py-6'>
              {/* Logo */}
              <Link to='/' className='flex items-center'>
                <img src={Logo} alt='audiophile' className='h-8' />
              </Link>
              {/* Nav Links */}
              <div className='flex gap-x-8'>
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className={`subtitle tracking-[2px] transition-colors duration-200 ${
                      location.pathname === link.to
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <button
                className='flex items-center relative'
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <img src={CartIcon} alt='' className='h-6' />
                {cartCount > 0 && (
                  <span className='absolute -top-2 -right-3 bg-primary text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold'>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            <div className='w-full h-px bg-white opacity-20' />
          </div>
        </div>
        {/* Mobile Nav */}
        <div className='md:hidden'>
          <div className='flex items-center justify-start w-full px-6 py-6 gap-6'>
            {/* Menu Icon */}
            <button
              className='flex items-center'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className='text-white' />
              ) : (
                <Menu size={24} className='text-white' />
              )}
            </button>

            <Link to='/' className='flex items-center'>
              <img src={Logo} alt='audiophile' className='h-6' />
            </Link>

            <div className='flex-grow'></div>

            <button
              className='flex items-center relative'
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <img src={CartIcon} alt='' className='h-6' />
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-3 bg-primary text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold'>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className='w-full h-px bg-white opacity-20' />
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white z-50'>
            <div className='flex flex-col divide-y divide-gray-light'>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`py-6 px-6 text-black uppercase font-bold text-lg tracking-wider ${
                    location.pathname === link.to ? 'text-primary' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
