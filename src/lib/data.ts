// src/lib/data.ts
import { Haircut, Testimonial } from './types';

export const haircuts: Haircut[] = [
  { id: '1', name: 'The Captain\'s Cut', description: 'A timeless, classic look. Sharp and commanding.', imageUrl: '/haircuts/Bro Flow.jpg' },
  { id: '2', name: 'The Sailor\'s Sweep', description: 'Medium length on top with a natural, textured finish.', imageUrl: '/haircuts/Buzz Cut Fade.jpg' },
  { id: '3', name: 'The First Mate Fade', description: 'A modern, sharp fade, versatile for any style.', imageUrl: '/haircuts/Curtain Bangs.jpg' },
  { id: '4', name: 'The Anchor Part', description: 'A refined side-parted style with a sharp lineup.', imageUrl: '/haircuts/Disconnected Undercut.jpg' },
  { id: '5', name: 'The Deckhand Buzz', description: 'A straightforward, no-fuss buzz cut.', imageUrl: '/haircuts/French Crop.jpg' },
  { id: '6', name: 'The Navigator\'s Pompadour', description: 'Bold and voluminous, styled to perfection.', imageUrl: '/haircuts/Hard Part Comb Over.jpg' },
];

export const featuredHaircuts: Haircut[] = haircuts.slice(0, 3);

export const testimonials: Testimonial[] = [
  { id: '1', name: 'John S.', quote: 'Ahoy Barbershop is a cut above the rest! The nautical theme is unique and fun, and the barbers are true professionals. I always leave feeling sharp and stylish.', avatarUrl: '/images/avatar1.jpg' },
  { id: '2', name: 'Mark D.', quote: 'Best shave I\'ve ever had! The attention to detail and the relaxing environment make Ahoy Barbershop my go-to place. Highly recommend to anyone looking for top-notch grooming services.', avatarUrl: '/images/avatar2.jpg' },
  { id: '3', name: 'Lisa M.', quote: 'I took my son to Ahoy Barbershop for his first haircut, and it was a fantastic experience. The barbers were friendly and patient, and he loved the pirate decorations. We\'ll definitely be back!', avatarUrl: '/images/avatar3.jpg' },
];