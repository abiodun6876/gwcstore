import { Phone, MapPin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center">Contact Fox Brook Wine</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 mt-1 text-red-600" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <p className="text-lg">08101023889</p>
                  <p className="text-lg">09079849145</p>
                  <Link 
                    href="mailto:info@foxbrookwine.com" 
                    className="flex items-center gap-2 text-lg hover:text-red-600"
                  >
                    <Mail className="h-5 w-5" />
                    info@foxbrookwine.com
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Instagram className="h-6 w-6 mt-1 text-red-600" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
                <Link 
                  href="https://instagram.com/foxbrookwine" 
                  target="_blank"
                  className="text-lg hover:text-red-600"
                >
                  @foxbrookwine
                </Link>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 mt-1 text-red-600" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  Shop A3 631/652 HFP Eastline Shopping Complex,<br />
                  Lekki Ajah, Lagos
                </p>
                <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace with actual map embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789012!2d3.1234567!3d6.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNSJOIDPCsDA3JzIxLjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}