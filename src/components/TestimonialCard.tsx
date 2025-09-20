// src/components/TestimonialCard.tsx
import Image from 'next/image';
import { Testimonial } from '@/lib/types';
import { User } from 'lucide-react'; // Placeholder icon

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-brand-surface p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {testimonial.avatarUrl ? (
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
            <User size={24} className="text-brand-bg" />
          </div>
        )}
        <h4 className="text-lg font-semibold text-brand-primary">{testimonial.name}</h4>
      </div>
      <p className="text-brand-text-secondary italic">"{testimonial.quote}"</p>
    </div>
  );
}