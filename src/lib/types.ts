// src/lib/types.ts
export interface Haircut {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price?: string; // Opsional
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatarUrl?: string; // Opsional
}