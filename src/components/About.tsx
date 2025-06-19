import aboutImage from "../assets/shared/desktop/image-best-gear.jpg";

interface AboutSectionProps {
  reverseLayout?: boolean;
}

export const AboutSection = ({ reverseLayout = true }: AboutSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto my-24 px-6">
      <div className={`flex flex-col ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-32 items-center`}>
        <div className="w-full md:w-full lg:w-1/2">
          <img 
            src={aboutImage} 
            alt="High quality audio gear from Audiophile"
             className="w-full md:h-[300px] lg:h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-h2 uppercase mb-6 md:mb-8">
            BRINGING YOU THE <span className="text-primary">BEST</span>
             AUDIO GEAR
          </h2>
          <div className="text-body text-black/70 leading-relaxed">
            <p>
              Located at the heart of New York City, Audiophile is the premier store for high end
              headphones, earphones, speakers, and audio accessories. We have a large
              showroom and luxury demonstration rooms available for you to browse and
              experience a wide range of our products. Stop by our store to meet some of the
              fantastic people who make Audiophile the best place to buy your portable audio
              equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};