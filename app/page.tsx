"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MapPin, Mail, Cake, Shirt, Globe, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import './globals.css'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Traditional African Pastries",
    subtitle: "Freshly baked daily using authentic recipes",
    cta: "View Menu",
    ctaLink: "/pastries"
  },
  {
    image: "/img/fashion.jpeg",
    title: "Handcrafted African Fashion",
    subtitle: "Custom designs for every occasion",
    cta: "Browse Collection",
    ctaLink: "/fashion"
  },
  {
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "African Grocery Essentials",
    subtitle: "All your favorite ingredients from back home",
    cta: "Shop Goods",
    ctaLink: "/african-foods"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (!isMounted) return null;

  return (
    <div className="bg-amber-50">
      {/* Hero Slideshow */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-2xl mx-auto text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center gap-4 animate-fadeIn delay-200">
<Button asChild size="lg" 
 variant="outline"
 className="text-white bg-yellow-600 border-white hover:bg-white/10" >
  <Link href={slide.ctaLink} passHref legacyBehavior>
    <a className="inline-flex items-center justify-center text-white bg-yellow-600 border-white hover:bg-white/10 gap-2 px-4 py-2 rounded-md">
      {slide.cta}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
          clipRule="evenodd" 
        />
      </svg>
    </a>
  </Link>
</Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-white bg-black/50 border-white hover:bg-white/10"
                  >
                    <a href="tel:19059227715">Call (905) 922-7715</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-1">Scroll Down</span>
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Business Focus Areas */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "African Pastries & Cooking",
              description: "Traditional baked goods and cooking services for events",
              icon: <Cake className="h-8 w-8 text-amber-600" />,
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              link: "/pastries",
              buttonText: "View Pastries"
            },
            {
              title: "Fashion Design",
              description: "Custom African apparel and tailoring services",
              icon: <Shirt className="h-8 w-8 text-amber-600" />,
              image: "/img/ankara.jpeg",
              link: "/fashion",
              buttonText: "Browse Fashion"
            },
            {
              title: "African Store Items",
              description: "Imported groceries and cultural goods",
              icon: <Globe className="h-8 w-8 text-amber-600" />,
              image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
              link: "/african-foods",
              buttonText: "Shop Goods"
            }
          ].map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index < 2} // Prioritize loading first two images
                />
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href={service.link} passHref legacyBehavior>
                    <a className="block w-full bg-amber-600 hover:bg-amber-700 text-white">{service.buttonText}</a>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us in Hamilton</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-amber-50 rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-700">
                Hamilton, Ontario, Canada
              </p>
              <Button variant="link" className="text-amber-600 mt-2" asChild>
                <Link href="https://maps.google.com" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">Get Directions</a>
                </Link>
              </Button>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg shadow-sm">
              <Phone className="h-8 w-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-700">
                <a href="tel:19059227715" className="hover:text-amber-600">(905) 922-7715</a>
              </p>
              <p className="text-sm mt-2">Text or Call</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-lg shadow-sm">
              <Mail className="h-8 w-8 mx-auto mb-4 text-amber-600" />
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:gbemisolaseli@gmail.com" className="hover:text-amber-600">
                  gbemisolaseli@gmail.com
                </a>
              </p>
              <p className="text-sm mt-2">For orders and inquiries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Notice */}
      <div className="bg-amber-100 py-8 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-2">Serving Hamilton and Surrounding Areas</h3>
          <p className="text-gray-700">
            Available for local delivery and pickup. Catering services for special events.
          </p>
        </div>
      </div>
    </div>
  );
}