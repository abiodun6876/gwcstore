"use client";

import { Store, Cake, Shirt, Utensils, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <Store className="h-10 w-10 text-amber-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">About GCW Store</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your trusted source for authentic African products in Hamilton
        </p>
      </div>

      {/* About Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Our Story */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-amber-600">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, GCW Store began as a small family business sharing our love for African culture through food and fashion. What started as a home-based bakery quickly grew into a thriving storefront in Hamilton, Ontario.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve both the African community and those who appreciate authentic cultural products, offering carefully curated pastries, clothing, and foods that remind our customers of home.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-amber-600">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Heart className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-800">Authenticity:</strong>
                 We source directly from African producers and use traditional recipes
              </span>
            </li>
            <li className="flex items-start">
              <Heart className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-800">Quality:</strong> Only the finest ingredients and materials go into our products
              </span>
            </li>
            <li className="flex items-start">
              <Heart className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">
                <strong className="text-gray-800">Community:</strong> We're committed to supporting both local and African artisans
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pastries */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 text-center p-6">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cake className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pastries</h3>
            <p className="text-gray-600">
              Freshly baked African and Western pastries made daily with premium ingredients
            </p>
          </div>

          {/* Fashion */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 text-center p-6">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shirt className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fashion</h3>
            <p className="text-gray-600">
              Authentic African clothing and accessories for all ages and occasions
            </p>
          </div>

          {/* Foods */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 text-center p-6">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">African Foods</h3>
            <p className="text-gray-600">
              Traditional prepared meals, ingredients, and hard-to-find African groceries
            </p>
          </div>
        </div>
      </div>

      {/* Team/Store Photo Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Visit Our Store</h2>
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/store-front.jpg" // Replace with your store image
            alt="GCW Store Front"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}