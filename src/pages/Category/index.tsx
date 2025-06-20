import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import products from '../../constants/data.json';
import type { Product } from '../../types';
import { CategoryCards } from '../../components/CategoryCard';
import { ProductCard } from '../../components/ProductCard';
import { useMemo } from 'react';

type CategoryParams = {
  category?: string;
};

const Category = () => {
  const { category } = useParams<CategoryParams>();

  const [categoryProducts, sortedProducts] = useMemo(() => {
    const filtered = products.filter(
      (product: Product) =>
        product?.category.toLowerCase() === category?.toLowerCase()
    );

    const sorted = [...filtered].sort((a, b) => {
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    });

    return [filtered, sorted];
  }, [category]);

  if (!categoryProducts.length) {
    return (
      <Layout>
        <div className='w-full bg-foreground py-16 md:py-20'>
          <div className='max-w-7xl mx-auto my-18 px-6 text-center'>
            <h3 className='text-white text-h3'>
              No Product for Selected Category
            </h3>
          </div>
        </div>

        <CategoryCards />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='w-full bg-foreground py-16 md:py-20'>
        <div className='max-w-7xl mx-auto my-18 px-6 text-center'>
          <h2 className='text-white text-h2'>{category}</h2>
        </div>
      </div>

      <div className='flex flex-col mx-auto px-8 lg:px-40 py-20'>
        {sortedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <CategoryCards />
    </Layout>
  );
};

export default Category;
