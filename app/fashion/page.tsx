"use client";

import { Shirt, ShoppingBag, Ruler, Scissors, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FashionPage() {
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

      {/* Gallery Placeholder */}
      <div className="mb-20 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Recent Designs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <Shirt className="h-12 w-12 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

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