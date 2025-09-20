// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#282119] to-[#3D2D22] text-brand-text-secondary mt-16 py-24">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Sweeney</h3>
            <p>© {new Date().getFullYear()} Sweeney Barbers. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-2">Contact Us</h4>
            <p>123 Nautical Lane, Harbor City, CA 98765</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@sweeneybarbershop.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-2">Follow us on:</h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <Link href="#" className="hover:text-brand-primary">Facebook</Link>
              <Link href="#" className="hover:text-brand-primary">Instagram</Link>
              <Link href="#" className="hover:text-brand-primary">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}