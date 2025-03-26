"use client";

import { useState } from "react";
import { Wine, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const wines = [
  {
    id: 1,
    name: "Sweet Red",
    description: "A delightfully sweet red wine perfect for any occasion",
    price: "₦5,000",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Moscato",
    description: "Sweet and refreshing white wine with floral aromas",
    price: "₦5,000",
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "D-Rose",
    description: "Elegant rosé wine with delicate fruit flavors",
    price: "₦5,500",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Merlot",
    description: "Smooth and medium-bodied red wine",
    price: "₦5,500",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Pinot Grigio",
    description: "Light and crisp white wine",
    price: "₦5,000",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Champagne",
    description: "Sparkling wine for celebrations",
    price: "₦12,000",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function WinesPage() {
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);

  const addToCart = (wineId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === wineId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === wineId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: wineId, quantity: 1 }];
    });
  };

  const handleCheckout = () => {
    const cartItems = cart.map(item => {
      const wine = wines.find(w => w.id === item.id);
      return `${wine?.name} (${item.quantity}x)`;
    }).join("\n");

    const message = encodeURIComponent(
      `Hello Fox Brook Wine,\n\nI would like to order:\n${cartItems}\n\nPlease provide payment details and delivery information.`
    );

    window.open(`https://wa.me/2348101023889?text=${message}`, '_blank');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Wine className="h-8 w-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold">Our Wine Collection</h1>
        </div>
        
        {cartCount > 0 && (
          <Button
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Checkout ({cartCount})
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wines.map((wine) => (
          <div key={wine.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={wine.image}
                alt={wine.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
              <p className="text-muted-foreground mb-4">{wine.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{wine.price}</span>
                <Button
                  onClick={() => addToCart(wine.id)}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          For bulk orders or special requests, please contact us on WhatsApp at{" "}
          <a 
            href="https://wa.me/2348101023889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700"
          >
            +234 810 102 3889
          </a>
        </p>
      </div>
    </div>
  );
}