import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Fox Brook Wine</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our premium selection of wines, perfect for every occasion
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/wines">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="tel:08101023889">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Moscato",
                image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Sweet and refreshing white wine"
              },
              {
                title: "Merlot",
                image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Smooth and medium-bodied red wine"
              },
              {
                title: "Cabernet Sauvignon",
                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Full-bodied red wine with rich flavors"
              }
            ].map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                  <Button variant="secondary" size="sm" asChild className="bg-white/20 hover:bg-white/30 text-white">
                    <Link href={`/wines?category=${category.title.toLowerCase()}`}>
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground">
                Shop A3 631/652 HFP Eastline Shopping Complex, Lekki Ajah Lagos
              </p>
            </div>
            <div className="text-center p-6">
              <Phone className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:08101023889" className="hover:text-red-600">08101023889</a>
                <br />
                <a href="tel:09079849145" className="hover:text-red-600">09079849145</a>
              </p>
            </div>
            <div className="text-center p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@foxbrookwine.com" className="hover:text-red-600">
                  info@foxbrookwine.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}