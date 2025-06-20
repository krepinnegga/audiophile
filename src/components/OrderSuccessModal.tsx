import { useState } from 'react';
import ConfirmationIcon from '../assets/checkout/icon-order-confirmation.svg';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const OrderSuccessModal = () => {
  const [showAll, setShowAll] = useState(false);
  const { items, clearCart, getTotal, getCartCount } = useCartStore();
  const navigate = useNavigate();

  const total = getTotal();
  const cartCount = getCartCount() - 1;

  const firstItem = items[0];

  const Image = new URL(
    `../assets/product-${items[0].slug}/desktop/image-product.jpg`,
    import.meta.url
  ).href;

  const handleBackToHome = () => {
    clearCart();
    navigate('/');
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2'>
      <div className='bg-white rounded-lg max-w-lg w-full p-8 md:p-12'>
        <div className='mb-8'>
          <img src={ConfirmationIcon} alt='success icon' />
        </div>

        <h2 className='h3 mb-4'>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className='body text-black/50 mb-8'>
          You will receive an email confirmation shortly.
        </p>

        <div className='flex flex-col md:flex-row w-full rounded-lg overflow-hidden mb-12'>
          <div className='flex-1 p-6 bg-gray-light'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img
                  src={Image}
                  alt={firstItem.name}
                  className='w-12 h-12 rounded-lg'
                />
                <div>
                  <p className='font-bold text-black text-body'>
                    {firstItem.name}
                  </p>
                  <p className='font-bold text-black/50 text-body'>
                    $ {firstItem.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className='text-black/50 font-bold'>
                x{firstItem.quantity}
              </span>
            </div>

            {showAll && (
              <>
                {items.slice(1).map(item => {
                  const Image = new URL(
                    `../assets/product-${item.slug}/desktop/image-product.jpg`,
                    import.meta.url
                  ).href;
                  return (
                    <div key={item.id} className='mt-4 pt-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                          <img
                            src={Image}
                            alt={item.name}
                            className='w-12 h-12 rounded-lg'
                          />
                          <div>
                            <p className='font-bold text-black text-body'>
                              {item.name}
                            </p>
                            <p className='font-bold text-black/50 text-body'>
                              $ {item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <span className='text-black/50 font-bold'>
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {cartCount > 0 && (
              <div className='flex  border-t border-black/10 justify-center mt-4'>
                <button
                  className='body text-black/50  text-center'
                  onClick={() => setShowAll(v => !v)}
                >
                  {showAll ? 'View less' : `and ${cartCount} other item(s)`}
                </button>
              </div>
            )}
          </div>

          <div className='bg-black p-6 flex flex-col justify-center min-w-[180px] md:min-w-[220px]'>
            <p className='body text-white/50 uppercase mb-2'>GRAND TOTAL</p>
            <p className='h6 text-white'>$ {total.toLocaleString()}</p>
          </div>
        </div>

        <div className='w-full'>
          <button
            onClick={handleBackToHome}
            className='btn-1 w-full text-center block'
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
