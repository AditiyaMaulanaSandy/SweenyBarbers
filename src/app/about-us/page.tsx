// src/app/about-us/page.tsx
import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/lib/data';
import type { Metadata } from 'next';
import HistoricImage from '../../../public/historicbarbershop.png'

export const metadata: Metadata = {
    title: 'About Us - Sweeney Barbers',
    description: 'Learn about the history and values of Sweeney Barbers.',
};

export default function AboutUsPage() {
  return (
    <div className='mt-24 p-16'>
      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-brand-primary text-center tracking-wider">ABOUT US</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-10">
          The History of Sweeney Barbers
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={HistoricImage.src} // Ganti dengan gambar sejarah
              alt="Historic Barbershop"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-brand-text-secondary">
            <p className="mb-4">
              Sweeney Barbers began as the vision of James Carter, a master barber with a deep appreciation for the craft. In 2010, fueled by a passion for timeless styles and the precision of classic grooming, James sought to create a haven for gentlemen seeking more than just a haircut, but an experience.
            </p>
            <p className="mb-4">
              He discovered a charming, old brick building with character and charm, reminiscent of a bygone era. With meticulous care and a nod to tradition, he transformed it into a bold yet refined space, where every detail, from the vintage chairs to the scent of bay rum, was curated to evoke the golden age of barbering.
            </p>
            <p>
              Today, Sweeney Barbers continues to uphold its legacy, blending classic techniques with contemporary trends. Our commitment remains unchanged: to offer every client an unparalleled grooming experience that pays tribute to the golden age of barbering.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="my-16 py-10 bg-brand-surface rounded-lg shadow-md">
        <blockquote className="text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl italic text-brand-text mb-4">
            &quot;Step into style at Sweeney Barbers, where every cut is a craft, and every shave is a statement.&quot;
          </p>
          <cite className="block text-lg font-semibold text-brand-primary not-italic">
            - James Carter
          </cite>
        </blockquote>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-sm font-semibold text-brand-primary text-center tracking-wider">ABOUT US</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-10">
          Our Testimonies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}