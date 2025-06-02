import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "Surabaya, Indonesia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    content: "My family and I had the most wonderful stay at MareSereno. The apartment was immaculate, with breathtaking sea views. The staff went above and beyond to make our vacation special.",
    rating: 5
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Pasuruan, Indonesia",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    content: "Absolutely perfect location, steps away from the beach. The apartment had everything we needed and more. The modern amenities combined with the traditional coastal charm created a truly magical experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Johnson",
    location: "Lombok, Indonesia",
    avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=150&h=150&fit=crop&crop=faces",
    content: "We spent a wonderful week at this beachfront paradise. The sunrise views from our terrace were worth the trip alone. Exceptionally clean and beautifully designed spaces.",
    rating: 4
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-12 md:py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="relative min-h-[400px] w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-6 transition-all duration-500 overflow-hidden rounded-lg",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col items-center h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="rounded-full overflow-hidden w-16 h-16 mb-3 border-2 border-primary">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <h4 className="text-base font-semibold text-center">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground text-center">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-sm text-muted-foreground text-center max-w-md mx-auto">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-4" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
