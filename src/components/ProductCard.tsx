import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const isReversed = index % 2 !== 0;
  const nameParts = product.name.split(' ');
  const lastWord = nameParts.pop();
  const mainName = nameParts.join(' ');

  const desktopImage = new URL(
    `../assets/product-${product.slug}/desktop/image-product.jpg`,
    import.meta.url
  ).href;
  const tabletImage = new URL(
    `../assets/product-${product.slug}/tablet/image-product.jpg`,
    import.meta.url
  ).href;
  const mobileImage = new URL(
    `../assets/product-${product.slug}/mobile/image-product.jpg`,
    import.meta.url
  ).href;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-32 mb-24 lg:mb-40 ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image Container */}
      <div className='bg-gray-light rounded-lg flex-1 w-full flex justify-center items-center p-12'>
        <picture>
          <source media='(max-width: 767px)' srcSet={mobileImage} />
          <source
            media='(min-width: 768px) and (max-width: 1023px)'
            srcSet={tabletImage}
          />
          <img
            src={desktopImage}
            alt={product.name}
            className='rounded-lg w-full h-full'
            loading='eager'
          />
        </picture>
      </div>

      {/* Content Container */}
      <div className='flex-1 text-center lg:text-left flex flex-col items-center lg:items-start'>
        {product.new && (
          <p className='text-overline text-primary mb-6'>NEW PRODUCT</p>
        )}
        <h2 className='text-h2 uppercase'>
          {mainName}
          <br />
          {lastWord}
        </h2>
        <p className='body text-black/50 my-8 max-w-md'>
          {product.description}
        </p>
        <Link
          to={`/product/${product.slug}`}
          className='btn-1'
          aria-label={`See product ${product.name}`}
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};
