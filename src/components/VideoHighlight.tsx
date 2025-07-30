import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { type VideoHighlight } from '../types';

const VideoHighlight = ({
  videoHighlight,
}: {
  videoHighlight: VideoHighlight;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="relative h-[50%] py-20 overflow-hidden">
        {/* Background Image with Fade Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${videoHighlight.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Play Button */}
          <div className="mb-8">
            <button
              onClick={openModal}
              className="group relative w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
              <Play
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-white/90 transition-colors duration-300"
                size={32}
                fill="white"
              />
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {videoHighlight.title}
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {videoHighlight.description}
          </p>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
              <iframe
                src={videoHighlight.videoLink}
                title={videoHighlight.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoHighlight;
