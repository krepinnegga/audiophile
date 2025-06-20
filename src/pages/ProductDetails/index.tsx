import { CategoryCards } from '../../components/CategoryCard';
import products from '../../constants/data.json';
import type { Product } from '../../types';
import Layout from '../../components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products.find((item: Product) => item.slug === slug);
  }, [slug]);

  const [quantity, setQuantity] = useState(1);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [product]);

  if (!product) {
    return (
      <Layout>
        <div className='w-full bg-foreground py-16 md:py-20'>
          <div className='max-w-7xl mx-auto my-18 px-6 text-center'>
            <h3 className='text-white text-h3'>No Product found</h3>
          </div>
        </div>

        <CategoryCards />
      </Layout>
    );
  }

  const nameParts = product.name.split(' ');
  const lastWord = nameParts.pop();
  const mainName = nameParts.join(' ');

  const desktopImage = new URL(
    `../../assets/product-${product.slug}/desktop/image-product.jpg`,
    import.meta.url
  ).href;
  const tabletImage = new URL(
    `../../assets/product-${product.slug}/tablet/image-product.jpg`,
    import.meta.url
  ).href;
  const mobileImage = new URL(
    `../../assets/product-${product.slug}/mobile/image-product.jpg`,
    import.meta.url
  ).href;

  return (
    <Layout>
      <div className='max-w-7xl mx-auto px-8 py-36 md:py-40'>
        <button
          onClick={handleGoBack}
          className='body text-black/50 mb-8 hover:text-primary transition-colors'
        >
          Go Back
        </button>

        <section className='flex flex-col md:flex-row items-center gap-12 lg:gap-32'>
          <div className='bg-gray-light rounded-lg flex-1 w-full flex justify-center items-center p-8 md:p-12'>
            <picture>
              <source media='(max-width: 767px)' srcSet={mobileImage} />
              <source
                media='(min-width: 768px) and (max-width: 1023px)'
                srcSet={tabletImage}
              />
              <img
                src={desktopImage}
                alt={product.name}
                className='rounded-lg h-auto w-full max-w-sm md:max-w-md lg:max-w-none'
                loading='eager'
              />
            </picture>
          </div>

          {/* Content Container */}
          <div className='flex-1 text-center md:text-left'>
            {product.new && (
              <p className='text-overline text-primary mb-4'>NEW PRODUCT</p>
            )}
            <h2 className='h2 uppercase'>
              {mainName}
              <br />
              {lastWord}
            </h2>
            <p className='body text-black/50 my-8 max-w-md mx-auto md:mx-0'>
              {product.description}
            </p>
            <p className='h6 mb-8'>$ {product.price.toLocaleString()}</p>

            <div className='flex items-center gap-4 justify-center md:justify-start'>
              {/* Quantity Stepper */}
              <div className='bg-gray-light flex items-center justify-between w-32 px-4 py-3'>
                <button
                  className='text-black/40 hover:text-primary'
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label='Decrease quantity'
                >
                  -
                </button>
                <span className='font-bold text-subtitle'>{quantity}</span>
                <button
                  className='text-black/40 hover:text-primary'
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label='Increase quantity'
                >
                  +
                </button>
              </div>
              {/* Add to Cart Button */}
              <button className='btn-1'>ADD TO CART</button>
            </div>
          </div>
        </section>

        {/* Features and In the Box */}
        <section className='flex flex-col lg:flex-row gap-24 lg:gap-32 my-24 lg:my-40'>
          {/* Features */}
          <div className='lg:w-2/3'>
            <h3 className='h3 uppercase mb-8'>Features</h3>
            <p className='body text-black/50 whitespace-pre-line'>
              {product.features}
            </p>
          </div>
          {/* In the Box */}
          <div className='lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-8'>
            <h3 className='h3 uppercase md:w-1/2 lg:w-full'>In the box</h3>
            <ul className='flex flex-col gap-2 md:w-1/2 lg:w-full'>
              {product.includes.map(item => (
                <li key={item.item} className='flex'>
                  <span className='text-primary font-bold mr-6'>
                    {item.quantity}x
                  </span>
                  <span className='body text-black/50'>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product Gallery */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8 my-24 lg:my-40'>
          <div className='md:col-span-1 flex flex-col gap-8'>
            <img
              src={
                new URL(
                  `../../assets/product-${product.slug}/desktop/image-gallery-1.jpg`,
                  import.meta.url
                ).href
              }
              alt=''
              className='rounded-lg h-full object-cover'
            />
            <img
              src={
                new URL(
                  `../../assets/product-${product.slug}/desktop/image-gallery-2.jpg`,
                  import.meta.url
                ).href
              }
              alt=''
              className='rounded-lg h-full object-cover'
            />
          </div>
          <div className='md:col-span-1'>
            <img
              src={
                new URL(
                  `../../assets/product-${product.slug}/desktop/image-gallery-3.jpg`,
                  import.meta.url
                ).href
              }
              alt=''
              className='rounded-lg h-full object-cover'
            />
          </div>
        </section>

        {/* "You May Also Like" Section */}
        <section className='my-24 lg:my-40'>
          <h3 className='h3 uppercase text-center mb-16'>You may also like</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {product.others.map(other => (
              <div
                key={other.slug}
                className='flex flex-col items-center gap-8'
              >
                <img
                  src={
                    new URL(
                      `../../assets/shared/desktop/image-${other.slug}.jpg`,
                      import.meta.url
                    ).href
                  }
                  alt={other.name}
                  className='rounded-lg'
                />
                <h4 className='h5 uppercase'>{other.name}</h4>
                <Link to={`/product/${other.slug}`} className='btn-1'>
                  SEE PRODUCT
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CategoryCards />
      </div>
    </Layout>
  );
};

export default ProductDetails;
