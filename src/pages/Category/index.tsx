import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import  products  from "../../constants/data.json";
import type { Product } from "../../types";
import { CategoryCards } from "../../components/CategoryCard";

type CategoryParams = {
  category?: string;
};

const Category = () => {
  const { category } = useParams<CategoryParams>();

  const categoryProducts = products.filter(
    (product: Product) => product?.category.toLowerCase() === category?.toLowerCase()
  );


  if (!categoryProducts.length) {
    return (
      <Layout>
        <div className="w-full bg-foreground py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-white">Category not found</h1>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full bg-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto my-18 px-6 text-center">
          <h2 className="text-white text-h1">{category}</h2>
        </div>
      </div>

      <CategoryCards />
    </Layout>
  )
}

export default Category;
