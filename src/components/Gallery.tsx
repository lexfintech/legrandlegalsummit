import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperCore from 'swiper';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (idx: number) => {
    setLoaded(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  return (
    <div>
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          width: 28px !important;
          height: 28px !important;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 28px !important;
        }
      `}</style>
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        className="mb-4 rounded-xl shadow-lg"
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onSwiper={swiper => setActiveIndex(swiper.realIndex)}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={img}>
            <div className="relative w-full min-h-96">
              <img
                src={`/images/gallery/${img}`}
                className="w-full min-h-96 object-cover rounded-xl"
                alt={`Gallery ${idx + 1}`}
                onLoad={() => handleImageLoad(idx)}
              />
              {/* Hide preloader if loaded */}
              {!loaded[idx] && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/30 z-10">
                  <span className="loader border-4 border-[#2E86AB] border-t-transparent rounded-full w-8 h-8 animate-spin"></span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={5}
        spaceBetween={8}
        watchSlidesProgress
        className="gallery-thumbs"
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        style={{ maxHeight: 80 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={img}>
            <div className={`relative w-full h-16 rounded ${activeIndex === idx ? '' : 'brightness-50'}`}>
              <img
                src={`/images/gallery/${img}`}
                className={`w-full h-16 object-cover rounded cursor-pointer border-2 ${activeIndex === idx ? 'border-[#000]' : 'border-transparent'}`}
                alt={`Thumbnail ${idx + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery; 