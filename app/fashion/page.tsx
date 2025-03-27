"use client";

import { Shirt, ShoppingBag, Ruler, Scissors, Phone } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";




export default function FashionPage() {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const imagePaths = [
        "/img/c1.jpeg",
        "/img/c2.jpeg",
        "/img/c3.jpeg",
        "/img/c4.jpeg",
        "/img/c5.jpeg",
        "/img/c6.jpeg",
        "/img/c7.jpeg",
         "/img/c8.jpeg",
         "/img/c9.jpeg",
         "/img/c10.jpeg",
          "/img/c11.jpeg"
      ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <Shirt className="h-10 w-10 text-amber-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">African Fashion Design</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Custom African apparel and tailoring services for women
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Scissors className="h-8 w-8 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold">Custom Tailoring</h2>
          </div>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Bespoke African outfits made to your measurements</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Wide selection of authentic African fabrics (Ankara, Kente, Adire)</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Modern and traditional designs available</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 mr-2">•</span>
              <span>Perfect for weddings, celebrations, and special occasions</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex items-center mb-6">
            <Ruler className="h-8 w-8 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold">Our Process</h2>
          </div>
          <ol className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="font-bold text-amber-600 mr-2">1.</span>
              <span>Consultation via WhatsApp or in-person</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-amber-600 mr-2">2.</span>
              <span>Fabric selection and design consultation</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-amber-600 mr-2">3.</span>
              <span>Measurement taking (virtual or in-person)</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-amber-600 mr-2">4.</span>
              <span>Creation of your custom outfit (2-3 weeks)</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-amber-600 mr-2">5.</span>
              <span>Final fitting and delivery</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {imagePaths.map((src, index) => (
          <div 
            key={index} 
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Fashion design ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-size Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Full size fashion design"
              width={1200}
              height={1200}
              className="object-contain w-full h-full"
            />
            <button 
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>)};
   


      {/* Contact CTA */}
      <div className="mt-20 text-center bg-amber-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Start Your Custom Order</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us to discuss your perfect African outfit design
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <a 
              href="https://wa.me/19059227715"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-100 px-8 py-4 text-lg"
          >
            <a href="tel:19059227715">
              <Phone className="mr-2 h-5 w-5" />
              Call (905) 922-7715
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}