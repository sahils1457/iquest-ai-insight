
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "iQuest helped me prepare for technical interviews with confidence. The AI feedback pinpointed areas I needed to improve, and I landed my dream job at a top tech company.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The detailed analytics and personalized reports were game-changers. After practicing with iQuest for just two weeks, I noticed a significant improvement in my interview performance.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "As someone who gets nervous during interviews, iQuest's realistic simulations helped me overcome my anxiety. The instant feedback made a huge difference in my confidence levels.",
    rating: 4
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Data Scientist",
    company: "AnalyticsPro",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "The technical interview practice on iQuest is incredible. It helped me sharpen my problem-solving skills and communicate complex concepts more clearly.",
    rating: 5
  },
  {
    id: 5,
    name: "Olivia Parker",
    role: "UX Designer",
    company: "DesignHub",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote: "iQuest's feedback on my body language and communication style was eye-opening. I didn't realize how much these non-verbal cues impact interview success.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-iqdark-500">
            Hear from candidates who transformed their interview skills with iQuest
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card text-center">
                    <div className="relative inline-block mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                      <div className="absolute bottom-0 right-0 bg-iqblue text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic text-iqdark-500 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-iqdark-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-iqblue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
