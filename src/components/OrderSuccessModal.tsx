import { useState } from 'react';
import { Link } from 'react-router-dom';
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import ConfirmationIcon from '../assets/checkout/icon-order-confirmation.svg';

const mockOrderItems = [
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
const grandTotal = 5446;

const OrderSuccessModal = () => {
  const [showAll, setShowAll] = useState(false);
  const firstItem = mockOrderItems[0];
  const otherCount = mockOrderItems.length - 1;

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
                  src={firstItem.image}
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
                {mockOrderItems.slice(1).map(item => (
                  <div key={item.id} className='mt-4 pt-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <img
                          src={item.image}
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
                ))}
              </>
            )}

            {otherCount > 0 && (
              <div className='flex  border-t border-black/10 justify-center mt-4'>
                <button
                  className='body text-black/50  text-center'
                  onClick={() => setShowAll(v => !v)}
                >
                  {showAll ? 'View less' : `and ${otherCount} other item(s)`}
                </button>
              </div>
            )}
          </div>

          <div className='bg-black p-6 flex flex-col justify-center min-w-[180px] md:min-w-[220px]'>
            <p className='body text-white/50 uppercase mb-2'>GRAND TOTAL</p>
            <p className='h6 text-white'>$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <div className='w-full'>
          <Link to='/' className='btn-1 w-full text-center block'>
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
