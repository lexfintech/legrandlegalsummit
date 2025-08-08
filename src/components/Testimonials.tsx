import { useState, useEffect } from 'react';
import { Testimonial } from '../types';

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to automatically advance the testimonials every 5 seconds
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change testimonial every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [testimonials]); // Re-run the effect if testimonials prop changes

  const visibleTestimonial = testimonials[currentTestimonialIndex];

  if (!visibleTestimonial) {
    return null; // Don't render if there are no testimonials
  }

  return (
    <section className="bg-background-secondary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-primary">
          Testimonials
        </h2>
        <div className={`w-24 h-1 bg-secondary-main mx-auto mt-4`}></div>
        <div className="flex justify-center items-center mt-8 relative">
          <div
            className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl transition-opacity duration-1000 ease-in-out"
            key={currentTestimonialIndex}
          >
            <p className="text-text-secondary text-xl italic mb-6">
              "{visibleTestimonial.feedback}"
            </p>
            <div className="border-t pt-4">
              <p className="text-text-primary font-semibold text-lg">
                {visibleTestimonial.name}
              </p>
              <p className="text-text-muted text-sm">
                {visibleTestimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
