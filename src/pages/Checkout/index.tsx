import { useState } from 'react';
import Layout from '../../components/Layout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import headphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import IconCashOnDelivery from '../../assets/checkout/icon-cash-on-delivery.svg';
import OrderSuccessModal from '../../components/OrderSuccessModal';

const cartItems = [
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
const SHIPPING = 50;
const VAT = 1079;
const GRAND_TOTAL = 5446;

const schema = z
  .object({
    name: z.string().min(2, 'Required'),
    email: z.string().email('Wrong format'),
    phone: z.string().min(10, 'Required'),
    address: z.string().min(2, 'Required'),
    zip: z.string().min(4, 'Required'),
    city: z.string().min(2, 'Required'),
    country: z.string().min(2, 'Required'),
    payment: z.enum(['e-Money', 'Cash on Delivery']),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.payment === 'e-Money') {
      if (!data.eMoneyNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Required',
          path: ['eMoneyNumber'],
        });
      }
      if (!data.eMoneyPin) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Required',
          path: ['eMoneyPin'],
        });
      }
    }
  });

type FormData = z.infer<typeof schema>;

const Checkout = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      payment: 'e-Money',
    },
  });

  const watchedPayment = watch('payment');

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setShowModal(true);
  };

  const handlePaymentChange = (value: 'e-Money' | 'Cash on Delivery') => {
    setValue('payment', value, { shouldValidate: true });
  };

  return (
    <Layout showAbout={false}>
      <div className='my-40 mx-4 px-2 md:px-6 lg:px-0'>
        <div className='max-w-7xl mx-auto'>
          <Link
            to='/'
            className='body text-black/50 hover:text-primary mb-6 inline-block hover:underline'
          >
            Go Back
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'
            noValidate
          >
            {/* Form Section */}
            <div className='bg-white rounded-lg p-6 md:p-10 lg:col-span-2 flex flex-col gap-8'>
              <h1 className='h3 uppercase mb-2'>Checkout</h1>

              {/* Billing Details */}
              <div>
                <h2 className='text-xs tracking-[1px] text-primary font-bold uppercase mb-4 mt-8'>
                  Billing Details
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Name */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.name ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        Name
                      </label>
                      {errors.name && (
                        <span className='text-red-500 text-xs'>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('name')}
                      className={`input w-full ${
                        errors.name
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='Alexei Ward'
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.email ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className='text-red-500 text-xs'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('email')}
                      className={`input w-full ${
                        errors.email
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='alexei@mail.com'
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.phone ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        Phone Number
                      </label>
                      {errors.phone && (
                        <span className='text-red-500 text-xs'>
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('phone')}
                      className={`input w-full ${
                        errors.phone
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='+1 202-555-0136'
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div>
                <h2 className='text-xs tracking-[1px] text-primary font-bold uppercase mb-4 mt-8'>
                  Shipping Info
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Address */}
                  <div className='md:col-span-2'>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.address ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        Address
                      </label>
                      {errors.address && (
                        <span className='text-red-500 text-xs'>
                          {errors.address.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('address')}
                      className={`input w-full ${
                        errors.address
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='1137 Williams Avenue'
                    />
                  </div>

                  {/* ZIP */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.zip ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        ZIP Code
                      </label>
                      {errors.zip && (
                        <span className='text-red-500 text-xs'>
                          {errors.zip.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('zip')}
                      className={`input w-full ${
                        errors.zip
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='10001'
                    />
                  </div>

                  {/* City */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.city ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        City
                      </label>
                      {errors.city && (
                        <span className='text-red-500 text-xs'>
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('city')}
                      className={`input w-full ${
                        errors.city
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='New York'
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <label
                        className={`body ${
                          errors.country ? 'text-red-500' : 'text-black'
                        }`}
                      >
                        Country
                      </label>
                      {errors.country && (
                        <span className='text-red-500 text-xs'>
                          {errors.country.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register('country')}
                      className={`input w-full ${
                        errors.country
                          ? 'border-red-500 border-2 focus:border-primary'
                          : ''
                      }`}
                      placeholder='United States'
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-xs tracking-[1px] text-primary font-bold uppercase mb-4 mt-8'>
                  Payment Details
                </h2>
                <div className='grid grid-cols-1 gap-6 items-start'>
                  {/* Payment Method - Pushed to right on desktop */}
                  <div className='md:ml-auto md:w-[280px]'>
                    <div className='flex justify-between items-center mb-2'>
                      <label className='body text-black'>Payment Method</label>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <label
                        className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer ${
                          watchedPayment === 'e-Money'
                            ? 'border-primary'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type='radio'
                          value='e-Money'
                          {...register('payment')}
                          checked={watchedPayment === 'e-Money'}
                          onChange={() => handlePaymentChange('e-Money')}
                          className='mr-3 accent-primary'
                        />
                        <span className='body'>e-Money</span>
                      </label>
                      <label
                        className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer ${
                          watchedPayment === 'Cash on Delivery'
                            ? 'border-primary'
                            : 'border-gray-200'
                        }`}
                      >
                        <input
                          type='radio'
                          value='Cash on Delivery'
                          {...register('payment')}
                          checked={watchedPayment === 'Cash on Delivery'}
                          onChange={() =>
                            handlePaymentChange('Cash on Delivery')
                          }
                          className='mr-3 accent-primary'
                        />
                        <span className='body'>Cash on Delivery</span>
                      </label>
                    </div>
                  </div>

                  {/* e-Money Fields (shown only when e-Money is selected) - Position unchanged */}
                  {watchedPayment === 'e-Money' && (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div>
                        <div className='flex justify-between items-center mb-2'>
                          <label
                            className={`body ${
                              errors.eMoneyNumber
                                ? 'text-red-500'
                                : 'text-black'
                            }`}
                          >
                            e-Money Number
                          </label>
                          {errors.eMoneyNumber && (
                            <span className='text-red-500 text-xs'>
                              {errors.eMoneyNumber.message}
                            </span>
                          )}
                        </div>
                        <input
                          {...register('eMoneyNumber', {
                            required: watchedPayment === 'e-Money',
                          })}
                          className={`input w-full ${
                            errors.eMoneyNumber
                              ? 'border-red-500 border-2 focus:border-primary'
                              : ''
                          }`}
                          placeholder='238521993'
                        />
                      </div>
                      <div>
                        <div className='flex justify-between items-center mb-2'>
                          <label
                            className={`body ${
                              errors.eMoneyPin ? 'text-red-500' : 'text-black'
                            }`}
                          >
                            e-Money PIN
                          </label>
                          {errors.eMoneyPin && (
                            <span className='text-red-500 text-xs'>
                              {errors.eMoneyPin.message}
                            </span>
                          )}
                        </div>
                        <input
                          {...register('eMoneyPin', {
                            required: watchedPayment === 'e-Money',
                          })}
                          className={`input w-full ${
                            errors.eMoneyPin
                              ? 'border-red-500 border-2 focus:border-primary'
                              : ''
                          }`}
                          placeholder='6891'
                        />
                      </div>
                    </div>
                  )}

                  {/* Cash on Delivery Info (shown only when Cash on Delivery is selected) */}
                  {watchedPayment === 'Cash on Delivery' && (
                    <div className='md:col-span-2 flex items-start gap-4 p-4'>
                      <img
                        src={IconCashOnDelivery}
                        alt='cash icon'
                        className='mt-1'
                      />
                      <span className='body text-black/50'>
                        The 'Cash on Delivery' option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className='bg-white rounded-lg p-6 md:p-8 flex flex-col gap-6 h-fit'>
              <h2 className='subtitle uppercase mb-4'>Summary</h2>
              <div className='flex flex-col gap-6'>
                {cartItems.map(item => (
                  <div key={item.id} className='flex  items-center gap-4'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16 bg-gray-light rounded-lg'
                    />
                    <div className='flex-1'>
                      <p className='font-bold text-black text-body'>
                        {item.name}
                      </p>
                      <p className='font-bold text-black/50 text-body'>
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                    <span className='text-black/50 font-bold'>
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className='flex justify-between items-center mt-4'>
                <p className='body text-black/50 uppercase'>Total</p>
                <p className='h6 text-black'>
                  ${' '}
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='body text-black/50 uppercase'>Shipping</p>
                <p className='h6 text-black'>$ {SHIPPING.toLocaleString()}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='body text-black/50 uppercase'>VAT (Included)</p>
                <p className='h6 text-black'>$ {VAT.toLocaleString()}</p>
              </div>
              <div className='flex justify-between items-center mb-4'>
                <p className='body text-black/50 uppercase'>Grand Total</p>
                <p className='h6 text-primary'>
                  $ {GRAND_TOTAL.toLocaleString()}
                </p>
              </div>
              <button
                type='submit'
                className='btn-1 w-full text-center disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-wider'
                disabled={!isValid}
              >
                Continue & Pay
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && <OrderSuccessModal />}
    </Layout>
  );
};

export default Checkout;
