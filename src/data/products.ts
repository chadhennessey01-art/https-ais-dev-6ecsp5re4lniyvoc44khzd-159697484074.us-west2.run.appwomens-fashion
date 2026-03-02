import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Slip Dress',
    price: 189,
    description: 'A timeless silhouette crafted from 100% mulberry silk. Perfect for evening elegance or layered for day.',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    colors: ['Champagne', 'Midnight', 'Emerald'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '2',
    name: 'Cashmere Oversized Sweater',
    price: 245,
    description: 'Ultra-soft Mongolian cashmere in a relaxed, modern cut. A staple for cooler seasons.',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1574167132757-1447ae9460a7?auto=format&fit=crop&q=80&w=800',
    colors: ['Oatmeal', 'Charcoal', 'Ivory'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Gold Link Necklace',
    price: 120,
    description: '18k gold plated chunky link necklace. Adds a sophisticated touch to any outfit.',
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Tailored Wool Blazer',
    price: 320,
    description: 'Structured shoulders and a cinched waist define this classic wool-blend blazer.',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    colors: ['Black', 'Camel'],
    sizes: ['0', '2', '4', '6', '8']
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    price: 210,
    description: 'Italian pebbled leather with gold-tone hardware. Compact yet spacious for essentials.',
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    colors: ['Tan', 'Black', 'Olive']
  },
  {
    id: '6',
    name: 'Linen Wide-Leg Trousers',
    price: 145,
    description: 'Breathable European linen with a high-waisted fit and elegant drape.',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    colors: ['Sand', 'White', 'Navy'],
    sizes: ['2', '4', '6', '8', '10']
  },
  {
    id: '7',
    name: 'Minimalist Hoop Earrings',
    price: 85,
    description: 'Sleek, lightweight hoops in sterling silver. The perfect everyday accessory.',
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1535633302704-b02f4fad253f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Suede Pointed Mules',
    price: 175,
    description: 'Handcrafted suede mules with a comfortable kitten heel and pointed toe.',
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    colors: ['Nude', 'Black'],
    sizes: ['36', '37', '38', '39', '40']
  }
];
