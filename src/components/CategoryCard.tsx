import { Link } from "react-router-dom";
import ChevronRight from "@/assets/shared/desktop/icon-arrow-right.svg";
import headphonesImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

interface CategoryItem {
  image: string;
  title: string;
  href: string;
}

export const CategoryCards = () => {

  const categories: CategoryItem[] = [
    {
      image: headphonesImage,
      title: "HEADPHONES",
      href: "/headphones",
    },
    {
      image: speakersImage,
      title: "SPEAKERS",
      href: "/speakers",
    },
    {
      image: earphonesImage,
      title: "EARPHONES",
      href: "/earphones",
    },
  ];


  return (
    <section className="max-w-7xl mx-auto px-6 my-28">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center bg-gray-light rounded-[8px] pt-20 pb-8 md:pt-24 md:pb-12 group"
        >
          {/* Floating Image and Shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16 flex flex-col items-center z-10">
            <div className="w-32 h-8 md:w-40 md:h-10 rounded-full bg-black/10 blur-md mb-[-1.5rem]" />
            <img
              src={category.image}
              alt={category.title}
              className="w-40 h-40 md:w-40 md:h-40 object-contain z-10"
            />
          </div>
          {/* Title */}
          <h3 className="subtitle text-black uppercase tracking-[2px] mb-4 text-lg md:text-xl font-bold text-center">
            {category.title}
          </h3>
          {/* Shop Link */}
          <Link
            to={category.href}
            className="flex items-center gap-3 subtitle text-gray-500 group-hover:text-primary transition-colors duration-200 font-bold tracking-[1px] uppercase"
          >
            SHOP
            <img
              src={ChevronRight}
              alt="Chevron Right"
              className="w-3 h-3 group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:hue-rotate-[10deg] group-hover:saturate-200 group-hover:text-primary"
              style={{ filter: 'none' }}
            />
          </Link>
        </div>
      ))}
    </div>
    </section>
  );
};