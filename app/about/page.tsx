import { Wine, Phone, MapPin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Fox Brook Wine</h1>
          <div className="relative h-64 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/img/allwin.JPG"
              alt="Fox Brook Wine Selection"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Premium wine selection in Lagos, Nigeria. We supply the best wines to retail stores, 
            hotels, weddings, and corporate events. Our carefully curated collection features 
            exceptional wines from around the world, selected for quality and taste.
          </p>
        </div>

        
        {/* Our Wines Section */}
<section className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Our Wine Selection</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {['Moscato', 'Merlot', 'Cabernet Sauvignon', 'Pinot Grigio', 'Chardonnay', 'Sweet Red'].map((wine) => (
      <div 
        key={wine} 
        className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
      >
        <div className="flex justify-center">
          <Wine className="h-12 w-12 text-red-600 mb-4" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{wine}</h3>
        <p className="text-gray-600">
          {wine === 'Moscato' && 'Sweet Italian white with peach and orange blossom aromas'}
          {wine === 'Merlot' && 'Soft, velvety red with plum and chocolate notes'}
          {wine === 'Cabernet Sauvignon' && 'Full-bodied red with blackcurrant and spice notes'}
          {wine === 'Pinot Grigio' && 'Crisp Italian white with citrus and melon flavors'}
          {wine === 'Chardonnay' && 'Buttery white with vanilla and tropical fruit notes'}
          {wine === 'Sweet Red' && 'Delightfully sweet red wine with berry notes'}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">08101023889</p>
                    <p className="text-gray-600">09079849145</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Instagram className="h-6 w-6 mt-1 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold">Instagram</h3>
                  <Link 
                    href="https://instagram.com/foxbrookwine" 
                    target="_blank"
                    className="text-gray-600 hover:text-red-600"
                  >
                    @foxbrookwine
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 mt-1 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="text-gray-600">
                  Shop A3 631/652 HFP Eastline Shopping Complex,<br />
                  Lekki Ajah, Lagos
                </p>
              </div>
            </div>
          </div>
        </section>

   
      </div>
    </div>
  );
}