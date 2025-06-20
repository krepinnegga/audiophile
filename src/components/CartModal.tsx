import { Link } from 'react-router-dom';
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { useState } from 'react';

const mockCartItems = [
  {
    id: 'xx99-mark-two-headphones',
    name: 'XX99 MK II',
    price: 2999,
    quantity: 1,
    image: headphonesImage,
  },
  {
    id: 'xx59-headphones',
    name: 'XX59',
    price: 899,
    quantity: 2,
    image: speakersImage,
  },
  {
    id: 'yx1-earphones',
    name: 'YX1',
    price: 599,
    quantity: 1,
    image: earphonesImage,
  },
];

const total = mockCartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
const cartCount = mockCartItems.reduce((acc, item) => acc + item.quantity, 0);

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/40 z-40'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Modal */}
      <div className='absolute top-full mt-6 right-5 md:right-4 bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-sm z-50'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-h6 text-[#000000] uppercase'>
            Cart ({cartCount})
          </h2>
          <button
            className='body text-black/50 underline hover:text-primary transition-colors'
            aria-label='Remove all items from cart'
          >
            Remove all
          </button>
        </div>

        {/* Items */}
        {cartCount > 0 ? (
          <div className='flex flex-col gap-6 mb-8'>
            {mockCartItems.map(item => (
              <div key={item.id} className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-14 h-14 bg-gray-light rounded-lg'
                  />
                  <div>
                    <p className='font-bold text-body text-black'>
                      {item.name}
                    </p>
                    <p className='font-bold text-body text-black/50'>
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className='bg-gray-light flex items-center justify-between w-24 p-2 text-center'>
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className='text-black/50 hover:text-primary px-2'
                  >
                    -
                  </button>
                  <span className='text-black text-subtitle'>{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className='text-black/50 hover:text-primary px-2'
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-black/50 body my-16'>
            Your cart is empty.
          </p>
        )}

        {/* Total */}
        <div className='flex justify-between items-center mb-6'>
          <p className='body text-black/50 uppercase'>Total</p>
          <p className='text-h6 text-black'>$ {total.toLocaleString()}</p>
        </div>

        {/* Checkout Button - Updated to take full width */}
        <div className='w-full'>
          <Link
            to='/checkout'
            className='btn-1 w-full text-center block'
            onClick={onClose}
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartModal;
