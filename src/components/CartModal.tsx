import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

interface CartModalProps {
  onClose: () => void;
}

const CartModal = ({ onClose }: CartModalProps) => {
  const { items, clearCart, getTotal, getCartCount, updateQuantity } =
    useCartStore();
  const total = getTotal();
  const cartCount = getCartCount();

  return (
    <>
      <div
        className='fixed inset-0 bg-black/40 z-40'
        onClick={onClose}
        aria-hidden='true'
      />

      <div className='absolute top-full mt-6 right-5 md:right-4 bg-white rounded-lg shadow-xl p-8 w-[90%] max-w-sm z-50'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-h6 text-[#000000] uppercase'>
            Cart ({cartCount})
          </h2>
          {cartCount > 0 && (
            <button
              onClick={clearCart}
              className='body text-black/50 underline hover:text-primary transition-colors'
              aria-label='Remove all items from cart'
            >
              Remove all
            </button>
          )}
        </div>

        {/* Items */}
        {cartCount > 0 ? (
          <div className='flex flex-col gap-6 mb-8 max-h-60 overflow-y-auto'>
            {items.map(item => {
              const Image = new URL(
                `../assets/product-${item.slug}/desktop/image-product.jpg`,
                import.meta.url
              ).href;
              return (
                <div
                  key={item.id}
                  className='flex items-center justify-between'
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={Image}
                      alt={item.name}
                      className='w-16 h-16 rounded-lg'
                    />
                    <div>
                      <p className='font-bold text-body text-black'>
                        {item.name.replace(' Headphones', '')}
                      </p>
                      <p className='font-bold text-body text-black/50'>
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className='bg-gray-light flex items-center justify-between w-24 p-2 text-center'>
                    <button
                      className='text-black/50 hover:text-primary px-2'
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className='text-black text-subtitle font-bold'>
                      {item.quantity}
                    </span>
                    <button
                      className='text-black/50 hover:text-primary px-2'
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className='text-center text-black/50 body my-16'>
            Your cart is empty.
          </p>
        )}

        {cartCount > 0 && (
          <>
            <div className='flex justify-between items-center mb-6'>
              <p className='body text-black/50 uppercase'>Total</p>
              <p className='text-h6 text-black'>$ {total.toLocaleString()}</p>
            </div>

            <Link to='/checkout' className='block w-full' onClick={onClose}>
              <button className='btn-1 w-full text-center'>CHECKOUT</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
