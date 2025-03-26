"use client";

import { useState } from "react";
import { Utensils, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const foods = [
  {
    id: 1,
    name: "Jollof Rice",
    description: "Classic West African spicy tomato rice",
    price: "$12.00",
    serves: "Serves 2-3",
    image: "/img/jollof.jpg"
  },
  {
    id: 2,
    name: "Pounded Yam & Egusi",
    description: "Traditional Nigerian dish with melon seed soup",
    price: "$15.00",
    serves: "Serves 2",
    image: "/img/pounded-yam.jpg"
  },
  {
    id: 3,
    name: "Suya",
    description: "Spicy skewered grilled meat with peanut spice",
    price: "$10.00 (6 pieces)",
    serves: "Appetizer",
    image: "/img/suya.jpg"
  },
  {
    id: 4,
    name: "Moin Moin",
    description: "Steamed bean pudding with spices",
    price: "$8.00",
    serves: "4 pieces",
    image: "/img/moin-moin.jpg"
  },
  {
    id: 5,
    name: "Chin Chin",
    description: "Crunchy Nigerian snack cookies",
    price: "$5.00 (pack)",
    serves: "Snack",
    image: "/img/chin-chin.jpg"
  },
  {
    id: 6,
    name: "Zobo Drink",
    description: "Refreshing hibiscus tea with ginger",
    price: "$4.00 (bottle)",
    serves: "500ml",
    image: "/img/zobo.jpg"
  }
];

export default function AfricanFoodsPage() {
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);

  const addToCart = (foodId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === foodId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === foodId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: foodId, quantity: 1 }];
    });
  };

  const removeFromCart = (foodId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === foodId);
      if (existingItem?.quantity === 1) {
        return prevCart.filter(item => item.id !== foodId);
      }
      return prevCart.map(item =>
        item.id === foodId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const handleCheckout = () => {
    const cartItems = cart.map(item => {
      const food = foods.find(f => f.id === item.id);
      return `${food?.name} (${item.quantity}x) - ${food?.price} each`;
    }).join("\n");

    const total = cart.reduce((sum, item) => {
      const food = foods.find(f => f.id === item.id);
      const priceNumber = food ? parseFloat(food.price.replace(/[^0-9.]/g, '')) || 0 : 0;
      return sum + priceNumber * item.quantity;
    }, 0);

    const message = encodeURIComponent(
      `Hello GCW Store,\n\nI would like to order:\n${cartItems}\n\nTotal: $${total.toFixed(2)}\n\nPlease provide payment details and pickup/delivery information.`
    );

    window.open(`https://wa.me/19059227715?text=${message}`, '_blank');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <Utensils className="h-10 w-10 text-amber-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">Authentic African Foods</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Traditional African dishes prepared with authentic recipes and ingredients
        </p>
      </div>

      {/* Cart Floating Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 shadow-lg rounded-full px-6 py-6 h-auto"
          >
            <ShoppingBag className="h-6 w-6" />
            <span className="text-lg font-medium">Checkout ({cartCount})</span>
          </Button>
        </div>
      )}

      {/* Foods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {foods.map((food) => {
          const cartItem = cart.find(item => item.id === food.id);
          const quantity = cartItem?.quantity || 0;
          
          return (
            <div key={food.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Food Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={food.image}
                  alt={food.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {quantity > 0 && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                    {quantity} in cart
                  </div>
                )}
              </div>

              {/* Food Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{food.name}</h3>
                  <span className="bg-amber-100 text-amber-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {food.serves}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{food.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{food.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {quantity > 0 ? (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => removeFromCart(food.id)}
                          className="border-amber-600 text-amber-600 hover:bg-amber-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-3 font-medium">{quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => addToCart(food.id)}
                          className="border-amber-600 text-amber-600 hover:bg-amber-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => addToCart(food.id)}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Catering Services Available</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us for large orders, events, and special occasions.
        </p>
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
            WhatsApp Order Inquiry
          </a>
        </Button>
      </div>
    </div>
  );
}