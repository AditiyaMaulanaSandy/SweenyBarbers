// src/app/(auth)/login/page.tsx
'use client';
import hashEmailPassword from '@/lib/hash';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simulated user credentials (replace with real API in production)
  const validUser = {
    email: 'user@example.com',
    password: 'password123',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    hashEmailPassword(email, password).then((hashKey) => {
      const userStr = localStorage.getItem(hashKey);
      if (userStr) {
        localStorage.setItem('isLoggedIn_sweeney', 'true');
        localStorage.setItem('userHash_sweeney', hashKey);
        router.push(searchParams.get('redirect') || '/');
      } else {
        setError('Invalid email or password.');
      }
    });
  };

  // Optional: Logout helper for other components
  // function handleLogout() {
  //   localStorage.removeItem('isLoggedIn_sweeney');
  //   localStorage.removeItem('userEmail_sweeney');
  //   router.push('/auth/login');
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg p-4">
      <div className="bg-brand-surface p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-brand-primary text-center mb-2">
          Sweeney Barbers
        </h1>
        <h2 className="text-xl font-semibold text-brand-text text-center mb-8">
          Member Login
        </h2>
        {error && <p className="bg-red-500 text-white p-3 rounded-md mb-4 text-sm">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-text-secondary mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
              placeholder="password123"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-brand-bg font-semibold py-3 px-6 rounded-md text-lg hover:bg-opacity-80 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-brand-text-secondary text-center mt-6">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-brand-primary hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}