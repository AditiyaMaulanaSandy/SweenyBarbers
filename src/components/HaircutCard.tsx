// src/components/HaircutCard.tsx
import Image from 'next/image';
import { Haircut } from '@/lib/types';

interface HaircutCardProps {
  haircut: Haircut;
}

export default function HaircutCard({ haircut }: HaircutCardProps) {
  return (
    <div className="bg-brand-surface rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-56">
        <Image
          src={haircut.imageUrl}
          alt={haircut.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-brand-primary mb-2">{haircut.name}</h3>
        <p className="text-brand-text-secondary text-sm">{haircut.description}</p>
        {haircut.price && <p className="mt-3 text-lg font-bold text-brand-primary">{haircut.price}</p>}
      </div>
    </div>
  );
}