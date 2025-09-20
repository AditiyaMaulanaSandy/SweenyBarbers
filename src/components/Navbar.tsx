// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-haircuts', label: 'Our Haircuts' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/membership', label: 'Membership' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('isLoggedIn_sweeney'));
    }
  }, [pathname]); // Re-check on path change, e.g., after login/logout

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn_sweeney');
      localStorage.removeItem('userEmail_sweeney');
    }
    setIsLoggedIn(false);
    router.push('/'); // Redirect to home after logout
    router.refresh(); // Force refresh to re-evaluate auth guards if any
  };

  return (
    <nav className="absolute z-10 bg-transparent w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brand-primary">
          Sweeney Barbers
        </Link>
        <div className="flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-brand-text-secondary hover:text-brand-primary
                ${pathname === link.href ? 'text-brand-primary font-semibold border-b-2 border-brand-primary' : ''}
              `}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}