import Layout from '../../components/Layout';
import heroImageDesktop from '../../assets/home/desktop/image-hero.jpg';
import heroImageTablet from '../../assets/home/tablet/image-header.jpg';
import heroImageMobile from '../../assets/home/mobile/image-header.jpg';
import { CategoryCards } from '../../components/CategoryCard';
import PatternCircles from '../../assets/home/desktop/pattern-circles.svg';
import ZX9Speaker from '../../assets/home/desktop/image-speaker-zx9.png';
import ZX7SpeakerTablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import ZX7SpeakerMobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import ZX7SpeakerDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import EarPhonesDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg';
import EarPhonesTablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import EarPhonesMobile from '../../assets/home/mobile/image-earphones-yx1.jpg';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className='relative w-full bg-foreground text-white overflow-hidden'>
        {/* Responsive Background Images using picture element */}
        <picture className='absolute inset-0'>
          {/* Mobile */}
          <source media='(max-width: 767px)' srcSet={heroImageMobile} />
          {/* Tablet */}
          <source
            media='(min-width: 768px) and (max-width: 1023px)'
            srcSet={heroImageTablet}
          />
          {/* Desktop */}
          <source media='(min-width: 1024px)' srcSet={heroImageDesktop} />
          {/* Fallback */}
          <img
            src={heroImageDesktop}
            alt='XX99 Mark II Headphones'
            className='w-full h-full object-cover opacity-90'
            loading='eager' // Hero image should load immediately
          />
        </picture>

        {/* Content Container */}
        <div className='relative max-w-7xl mx-auto px-6 py-32 lg:py-48 min-h-[600px] md:min-h-[720px] flex items-center'>
          <div className='max-w-md md:max-w-lg lg:max-w-xl text-center md:text-left'>
            <span className='text-overline text-white/50 block mb-4'>
              NEW PRODUCT
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight'>
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className='text-body text-white/75 mb-10'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className='bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 uppercase text-subtitle tracking-wider transition-colors'>
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      <div className='my-28'>
        <CategoryCards />
      </div>
      {/* ZX9 Speaker Section */}
      <section className='max-w-7xl mx-auto px-6 mb-12'>
        <div className='relative bg-primary rounded-lg overflow-hidden'>
          <img
            src={PatternCircles}
            alt=''
            className='absolute w-[120%] md:w-[150%] lg:w-[70%] left-1/2 -translate-x-1/2 top-0 md:-top-40 lg:-top-20 lg:left-[-10%] lg:translate-x-0'
            aria-hidden='true'
          />

          <div className='relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 md:py-24'>
            <div className='w-48 md:w-56 lg:w-96 mb-8 lg:mb-0'>
              <img
                src={ZX9Speaker}
                alt='ZX9 SPEAKER'
                className='w-full h-auto object-contain'
              />
            </div>

            <div className='max-w-md text-center lg:text-left text-white'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6'>
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className='text-body text-white/75 mb-8'>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className='bg-black-pure hover:bg-gray-800 text-white font-bold py-3 px-8 uppercase text-subtitle tracking-wider transition-colors'>
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Speaker Section */}
      <section className='max-w-7xl mx-auto px-6 mb-12'>
        <div className='relative w-full h-[320px] md:h-[400px] rounded-lg overflow-hidden'>
          <picture>
            {/* Mobile */}
            <source media='(max-width: 767px)' srcSet={ZX7SpeakerMobile} />
            {/* Tablet */}
            <source
              media='(min-width: 768px) and (max-width: 1023px)'
              srcSet={ZX7SpeakerTablet}
            />
            {/* Desktop */}
            <source media='(min-width: 1024px)' srcSet={ZX7SpeakerDesktop} />
            {/* Fallback */}
            <img
              src={ZX7SpeakerDesktop}
              alt='ZX7 Speaker product showcase'
              className='absolute inset-0 w-full h-full object-cover'
              loading='lazy'
            />
          </picture>

          <div className='relative h-full flex items-center px-6 md:px-12 lg:px-24'>
            <div className='max-w-md'>
              <h2 className='text-3xl md:text-4xl font-bold uppercase mb-8 text-black'>
                ZX7 SPEAKER
              </h2>
              <button className='btn-2'>SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </section>

      {/* Earphones Section */}
      <section className='max-w-7xl mx-auto px-6 mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <picture>
              {/* Mobile */}
              <source media='(max-width: 767px)' srcSet={EarPhonesMobile} />
              {/* Tablet */}
              <source
                media='(min-width: 768px) and (max-width: 1023px)'
                srcSet={EarPhonesTablet}
              />
              {/* Desktop */}
              <source media='(min-width: 1024px)' srcSet={EarPhonesDesktop} />
              {/* Fallback */}
              <img
                src={EarPhonesDesktop}
                alt='YX1 Earphones'
                className='w-full h-full object-cover rounded-lg'
                loading='lazy'
              />
            </picture>
          </div>

          {/* Content Part */}
          <div className='bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-start p-6 md:p-12 lg:p-24'>
            <h2 className='text-3xl md:text-4xl font-bold uppercase mb-8 text-black'>
              YX1 EARPHONES
            </h2>
            <button className='btn-2'>SEE PRODUCT</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
