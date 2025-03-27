"use client";

import { useState } from "react";
import { Cake, ShoppingBag, Plus, Minus, Utensils, Soup } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const pastries = [
  {
    id: 1,
    name: "Peppered Fish",
    description: "Spicy grilled fish with African seasonings",
    price: "$4.00 per piece",
    bulkPrice: "Contact for bulk orders",
    image: "/img/peppered-fish.jpeg"
  },
  {
    id: 2,
    name: "Sausage Roll",
    description: "Flaky pastry wrapped around seasoned sausage",
    price: "$35.00 (12 pieces)",
    bulkPrice: "Contact for larger orders",
    image: "/img/sausage-roll.jpeg"
  },
  {
    id: 3,
    name: "Chicken Pie",
    description: "Savory pastry filled with spiced chicken",
    price: "$45.00 (12 pieces)",
    bulkPrice: "Perfect for events and gatherings",
    image: "/img/chicken-pie.jpeg"
  },
  {
    id: 4,
    name: "Meat Pie",
    description: "Golden pastry with seasoned beef filling",
    price: "$35.00 (12 pieces)",
    bulkPrice: "Great for parties and meetings",
    image: "/img/meat-pie.jpeg"
  },
  {
    id: 5,
    name: "Egg Roll",
    description: "Delicious pastry with egg filling",
    price: "$45.00 (12 pieces)",
    bulkPrice: "Ideal for breakfast or snacks",
    image: "/img/egg-roll.jpeg"
  },
  {
    id: 6,
    name: "Puff Puff",
    description: "Soft, sweet African dough balls",
    price: "$0.60 per piece",
    bulkPrice: "Discounted rates for large orders",
    image: "/img/puff-puff.jpeg"
  }
];

const riceMeals = [
  {
    id: 7,
    name: "Jollof Rice",
    description: "Flavorful West African spicy rice",
    price: "$50 (small tray)",
    bulkPrice: "$80 (medium) | $100 (large)",
    image: "/img/jollof-rice.jpeg"
  },
  {
    id: 8,
    name: "Fried Rice",
    description: "African-style fried rice with vegetables",
    price: "$50 (small tray)",
    bulkPrice: "$80 (medium) | $100 (large)",
    image: "/img/fried-rice.jpeg"
  }
];

const soups = [
  {
    id: 9,
    name: "Egusi Soup",
    description: "Rich melon seed soup with assorted meats",
    price: "$20 per bowl",
    bulkPrice: "Comes with swallow of choice",
    image: "/img/Egusi Soup.jpeg"
  },
  {
    id: 10,
    name: "Okro Soup",
    description: "Nigerian okra soup with seafood options",
    price: "$20 per bowl",
    bulkPrice: "Best served with pounded yam",
    image: "/img/okro-soup.jpeg"
  }
];

export default function PastriesPage() {
  const [cart, setCart] = useState<{id: number; quantity: number}[]>([]);

  const addToCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: itemId, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem?.quantity === 1) {
        return prevCart.filter(item => item.id !== itemId);
      }
      return prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const handleCheckout = () => {
    const allProducts = [...pastries, ...riceMeals, ...soups];
    const cartItems = cart.map(item => {
      const product = allProducts.find(p => p.id === item.id);
      return `${product?.name} (${item.quantity}x) - ${product?.price}`;
    }).join("\n");

    const total = cart.reduce((sum, item) => {
      const product = allProducts.find(p => p.id === item.id);
      const priceNumber = product ? parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0 : 0;
      return sum + priceNumber * item.quantity;
    }, 0);

    const message = encodeURIComponent(
      `Hello GCW Store,\n\nI would like to order:\n${cartItems}\n\nTotal: $${total.toFixed(2)}\n\nPlease provide payment details and pickup/delivery information.`
    );

    window.open(`https://wa.me/19059227715?text=${message}`, '_blank');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderProductCard = (product: typeof pastries[0]) => {
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem?.quantity || 0;
    
    return (
      <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
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

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
            <span className="bg-amber-100 text-amber-800 text-sm font-medium px-2.5 py-0.5 rounded">
              Fresh
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">{product.price}</span>
              <span className="text-sm text-gray-500">{product.bulkPrice}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {quantity > 0 ? (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => removeFromCart(product.id)}
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-3 font-medium">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addToCart(product.id)}
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => addToCart(product.id)}
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
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center mb-6">
          <Cake className="h-10 w-10 text-amber-600 mr-3" />
          <h1 className="text-4xl font-bold tracking-tight">GCW Food Menu</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Authentic African pastries, meals, and soups made with premium ingredients
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

      {/* Pastries Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Cake className="h-8 w-8 text-amber-600 mr-3" />
          <h2 className="text-2xl font-bold">Pastries</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pastries.map(renderProductCard)}
        </div>
      </section>

      {/* Rice Meals Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Utensils className="h-8 w-8 text-amber-600 mr-3" />
          <h2 className="text-2xl font-bold">Rice Meals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {riceMeals.map(renderProductCard)}
        </div>
      </section>

      {/* Soups Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Soup className="h-8 w-8 text-amber-600 mr-3" />
          <h2 className="text-2xl font-bold">Soups</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {soups.map(renderProductCard)}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-20 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Special Orders & Catering</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us for custom orders, events, and bulk purchases.
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