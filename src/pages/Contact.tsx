import React from 'react';
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/lib/data";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const handleNavClick = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    if (targetId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar items={navItems} onNavClick={handleNavClick} />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-gray-600">123 Innovation Way, Tech City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-600">info@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <LeadCaptureForm />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;