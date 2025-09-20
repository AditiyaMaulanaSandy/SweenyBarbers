// src/app/membership/page.tsx
'use client'; // Karena akan ada interaksi form

import AuthGuard from '@/components/AuthGuard';
import MembershipCard from '@/components/MembershipCard';
// import type { Metadata } from 'next'; // Metadata statis tidak bisa di client component, pindah ke layout atau wrap dengan server component jika perlu SEO dinamis

// export const metadata: Metadata = { // Pindahkan ke parent server component atau layout
//     title: 'Membership - Sweeney Barbers',
//     description: 'Join our exclusive membership program for premium benefits.',
// };

function MembershipContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#3c2f24] p-4">
      <MembershipCard
        userHash={localStorage.getItem('userHash_sweeney') || ''}
        points={100}
        currentSpend={500}
        targetSpend={1000}
      />
    </main>
  );
}

export default function MembershipPage() {
  // Wrap dengan AuthGuard untuk proteksi
  return (
    <AuthGuard>
      <MembershipContent />
    </AuthGuard>
  );
}