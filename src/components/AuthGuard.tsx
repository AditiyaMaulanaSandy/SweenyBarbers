// src/components/AuthGuard.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Fungsi mock untuk mengecek status login (ganti dengan logika auth Anda)
const checkAuthStatus = (): boolean => {
  // Di aplikasi nyata, Anda akan memeriksa token, session, dll.
  // Untuk contoh ini, kita gunakan localStorage.
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('isLoggedIn_sweeney');
  }
  return false;
};

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!checkAuthStatus()) {
      router.push('/auth/login?redirect=/membership'); // Redirect ke login jika tidak terautentikasi
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    // Bisa tampilkan loading spinner atau null
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-brand-primary text-xl">Checking authentication...</p>
        </div>
    );
  }

  return <>{children}</>;
}