"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `New Contact Form Submission:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/19059227715?text=${encodedMessage}`, '_blank');
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Contact GCW Store</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for orders, questions, or feedback.
        </p>
      </div>

      {/* Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Our Location</h3>
                <p className="text-gray-600">
                  Hamilton, Ontario, Canada
                </p>
                <Button
                  variant="link"
                  className="text-amber-600 p-0 h-auto mt-2"
                  asChild
                >
                  <a 
                    href="https://maps.google.com?q=GCW+Store+Hamilton+Ontario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Phone className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600">
                  (905) 922-7715
                </p>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant="outline"
                    className="text-amber-600 border-amber-600 hover:bg-amber-50 h-8"
                    asChild
                  >
                    <a href="tel:9059227715">
                      Call Now
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-50 h-8"
                    asChild
                  >
                    <a href="https://wa.me/19059227715" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Mail className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">
                  gbemisolaseli@gmail.com
                </p>
                <Button
                  variant="link"
                  className="text-amber-600 p-0 h-auto mt-2"
                  asChild
                >
                  <a href="mailto:gbemisolaseli@gmail.com">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Mon-Fri:</span> 9:00 AM - 7:00 PM
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Sat:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p className="flex justify-between max-w-xs">
                    <span className="font-medium">Sun:</span> 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg"
            >
              Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="text-center bg-amber-50 rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Prefer to message directly?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Click below to chat with us on WhatsApp immediately.
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
            Start WhatsApp Chat
          </a>
        </Button>
      </div>
    </div>
  );
}