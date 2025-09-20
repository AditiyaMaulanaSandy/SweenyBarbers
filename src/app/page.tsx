// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import HaircutCard from '@/components/HaircutCard';
import { featuredHaircuts } from '@/lib/data';
import HeroImage from '../../public/sweeney_barber_home_hero.jpeg';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] pt-40 w-screen flex items-center justify-center text-center text-white mb-16">
        <Image
          src={HeroImage} // Ganti dengan gambar hero Anda
          alt="Sweeney Barbers Interior"
          fill
          quality={85}
          className="brightness-50 object-cover object-top "
        />
        <div className="relative flex-col z-10 p-6 w-screen bg-gradient-to-b from-transparent to-[#3D2D22] h-full">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-4">
            Sweeney Barbers
          </h1>
          <p className="text-xl md:text-2xl text-brand-text mb-8 max-w-2xl mx-auto">
            Step into Sweeney Barbers, where precision meets tradition.
            Our master barbers offer classic cuts, clean shaves, and impeccable grooming
            in a vintage, welcoming atmosphere. Get back to basics and let us craft your
            look—no tricks, just top-tier trims!
          </p>
          <Link
            href="/membership"
            className="bg-brand-primary text-brand-bg font-semibold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-colors"
          >
            Get Membership
          </Link>
        </div>
      </section>

      {/* Finest Choices Section */}
      <section>
        <h2 className="text-sm font-semibold text-brand-primary text-center tracking-wider">FINEST CHOICES</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-brand-text text-center mb-10">
          The Best of The Best
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
          {featuredHaircuts.map((haircut) => (
            <HaircutCard key={haircut.id} haircut={haircut} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/our-haircuts" className="text-brand-primary hover:underline font-semibold">
            View All Haircuts →
          </Link>
        </div>
      </section>
    </div>
  );
}