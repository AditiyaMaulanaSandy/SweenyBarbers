// src/app/(auth)/register/page.tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import hashEmailPassword from '@/lib/hash'

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Logika register SANGAT SEDERHANA (ganti dengan auth asli)
    // Di dunia nyata, Anda akan mengirim ini ke backend untuk membuat user
    console.log('Registering:', { fullName, email, password });
    // Mock successful registration and login
    const user = {
      'name': fullName,
      'membershipLevel': 100,
      'email': email,
      'address': address

    };

    hashEmailPassword(email, password).then((hashKey) => {
      localStorage.setItem(hashKey, JSON.stringify(user));
      localStorage.setItem('isLoggedIn_sweeney', 'true');
      localStorage.setItem('userHash_sweeney', hashKey); // Save hash for later reference
      router.push('/membership');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg p-4">
      <div className="bg-brand-surface p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-brand-primary text-center mb-2">
          Sweeney Barbers
        </h1>
        <h2 className="text-xl font-semibold text-brand-text text-center mb-8">
          Create Account
        </h2>
        {error && <p className="bg-red-500 text-white p-3 rounded-md mb-4 text-sm">{error}</p>}
        {/* <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-brand-text-secondary mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
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
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-text-secondary mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-brand-bg font-semibold py-3 px-6 rounded-md text-lg hover:bg-opacity-80 transition-colors"
          >
            Register
          </button>
        </form> */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-brand-text-secondary mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-brand-text-secondary mb-1">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-1">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-brand-text focus:ring-brand-primary focus:border-brand-primary"
            />
          </div>
          <div className="flex items-center">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 text-brand-primary bg-gray-700 border-gray-600 rounded focus:ring-brand-primary"
            />
            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-brand-text-secondary">
              I Agree to terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-brand-bg font-semibold py-3 px-6 rounded-md text-lg hover:bg-opacity-80 transition-colors disabled:opacity-50"
            disabled={!agreed}
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-brand-text-secondary text-center mt-6">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-brand-primary hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}