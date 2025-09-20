// src/app/our-haircuts/page.tsx
import HaircutCard from '@/components/HaircutCard';
import { haircuts } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Haircuts - Sweeney Barbers',
    description: 'Explore our range of luxury barber services and haircuts.',
};

export default function OurHaircutsPage() {
  return (
    <div className='mt-28 p-16'>
      <h2 className="text-sm font-semibold text-brand-primary text-center tracking-wider">LUXURY SERVICE</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-10">
        Our Haircuts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {haircuts.map((haircut) => (
          <HaircutCard key={haircut.id} haircut={haircut} />
        ))}
      </div>
    </div>
  );
}