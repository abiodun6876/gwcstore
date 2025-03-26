"use client";

import { useState } from "react";
import { Wine, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const wines = [
  {
    id: 1,
    name: "Sweet Red",
    description: "Delightfully sweet red wine with berry notes",
    price: "₦5,000 (750ml)",
    bulkPrice: "₦150,000 (12 bottles)",
    image: "/img/sweet red.jpg"
  },
  {
    id: 2,
    name: "Moscato",
    description: "Sweet Italian white wine with peach and orange blossom aromas",
    price: "₦5,000 (750ml)",
    bulkPrice: "₦150,000 (12 bottles)",
    image: "/img/mascato.JPG"
  },
  {
    id: 3,
    name: "Cabernet Sauvignon",
    description: "Full-bodied red with blackcurrant and spice notes",
    price: "₦5,500 (750ml)",
    bulkPrice: "₦165,000 (12 bottles)",
    image: "/img/carbernet sauvignon.JPG"
  },
  {
    id: 4,
    name: "Merlot",
    description: "Soft, velvety red with plum and chocolate notes",
    price: "₦5,500 (750ml)",
    bulkPrice: "₦165,000 (12 bottles)",
    image: "/img/marlot.JPG"
  },
  {
    id: 5,
    name: "Pinot Grigio",
    description: "Crisp Italian white with citrus and melon flavors",
    price: "₦5,000 (750ml)",
    bulkPrice: "₦150,000 (12 bottles)",
    image: "/img/Pinot.jpg"
  },
  {
    id: 6,
    name: "whitezinfandel california",
    description: "Buttery white with vanilla and tropical fruit notes",
    price: "₦12,500 (750ml)",
    bulkPrice: "₦150,000 (12 bottles)",
    image: "/img/whitezinfandel california.JPG"
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

  const removeFromCart = (wineId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === wineId);
      if (existingItem?.quantity === 1) {
        return prevCart.filter(item => item.id !== wineId);
      }
      return prevCart.map(item =>
        item.id === wineId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const handleCheckout = () => {
    const cartItems = cart.map(item => {
      const wine = wines.find(w => w.id === item.id);
      return `${wine?.name} (${item.quantity}x) - ${wine?.price.split(" ")[0]} each`;
    }).join("\n");

    const total = cart.reduce((sum, item) => {
      const wine = wines.find(w => w.id === item.id);
      const priceNumber = wine ? parseInt(wine.price.replace(/[^0-9]/g, '')) || 0 : 0;
      return sum + priceNumber * item.quantity;
    }, 0);

    const message = encodeURIComponent(
      `Hello Fox Brook Wine,\n\nI would like to order:\n${cartItems}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease provide payment details and delivery information.`
    );

    window.open(`https://wa.me/2348101023889?text=${message}`, '_blank');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <Wine className="h-10 w-10 text-red-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">Premium Wine Collection</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our exquisite selection of fine wines from around the world
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

      {/* Wine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {wines.map((wine) => {
          const cartItem = cart.find(item => item.id === wine.id);
          const quantity = cartItem?.quantity || 0;
          
          return (
            <div key={wine.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Wine Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={wine.image}
                  alt={wine.name}
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

              {/* Wine Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{wine.name}</h3>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {wine.price.split(" ")[1]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{wine.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{wine.price}</span>
                    <span className="text-sm text-gray-500">{wine.bulkPrice}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {quantity > 0 ? (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => removeFromCart(wine.id)}
                          className="border-red-600 text-red-600 hover:bg-red-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-3 font-medium">{quantity}</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => addToCart(wine.id)}
                          className="border-red-600 text-red-600 hover:bg-red-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => addToCart(wine.id)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
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
        <h2 className="text-2xl font-bold mb-4">Special Offers for Bulk Orders</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us directly for exclusive deals on case purchases and corporate gifting.
        </p>
        <Button
          asChild
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
        >
          <a 
            href="https://wa.me/2348101023889"
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