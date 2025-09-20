// src/app/contact-us/page.tsx
import { MapPin, Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Sweeney Barbers',
    description: 'Get in touch with Sweeney Barbers. Find our location and contact details.',
};

export default function ContactUsPage() {
  return (
    <div className='mt-24 p-16'>
      <h2 className="text-sm font-semibold text-brand-primary text-center tracking-wider">CONTACT US</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-10">
        Where To Contact Us
      </h1>

      <div className="bg-brand-surface p-8 rounded-lg shadow-lg">
        <div className="mb-8 h-72 md:h-96 relative rounded-md overflow-hidden">
          <iframe
            title="Sweeney Barbers Location"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAen80ddLvqh2OuO2rHWOyJbf-8UqvP1hg&q=Summarecon+Bekasi"
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full border-0 rounded-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <MapPin size={36} className="mx-auto mb-3 text-brand-primary" />
            <h3 className="text-xl font-semibold text-brand-text mb-1">Our Location</h3>
            <p className="text-brand-text-secondary">
              Summarecon Bekasi, Jl. Boulevard Ahmad Yani, Marga Mulya, Kec. Bekasi Utara, Kota Bks, Jawa Barat
            </p>
            <p className="text-brand-text-secondary">
              (Additional address: 123 Nautical Lane, Harbor City, CA 98765)
            </p>
          </div>
          <div>
            <Phone size={36} className="mx-auto mb-3 text-brand-primary" />
            <h3 className="text-xl font-semibold text-brand-text mb-1">Phone Number</h3>
            <p className="text-brand-text-secondary">(555) 123-4567</p>
          </div>
          <div>
            <Mail size={36} className="mx-auto mb-3 text-brand-primary" />
            <h3 className="text-xl font-semibold text-brand-text mb-1">For Further Inquiries</h3>
            <a href="mailto:info@sweeneybarbers.com" className="text-brand-primary hover:underline">
              info@sweeneybarbers.com
            </a>
            <br/>
            <a href="mailto:info@sweeneybarbershop.com" className="text-brand-primary hover:underline">
              info@sweeneybarbershop.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}