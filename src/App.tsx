import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { products } from './data/products';
import { Product, CartItem } from './types';
import { ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
              alt="Hero"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Spring Summer 2024</span>
              <h2 className="text-7xl md:text-8xl font-serif leading-tight mb-8">
                The Art of <br />
                <span className="italic">Refinement</span>
              </h2>
              <p className="text-lg opacity-90 mb-10 max-w-md font-light leading-relaxed">
                Discover our latest collection of elevated essentials designed for the modern woman. 
                Timeless silhouettes, premium fabrics, and impeccable craftsmanship.
              </p>
              <button className="group flex items-center gap-3 bg-white text-brand-ink px-8 py-4 rounded-full font-medium hover:bg-brand-ink hover:text-white transition-all duration-300">
                Explore Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </section>

        {/* Categories / Filter */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Essentials</h2>
              <p className="text-brand-ink/60 max-w-md italic">
                Thoughtfully selected pieces that form the foundation of a conscious wardrobe.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {['all', 'clothing', 'accessory', 'shoes'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat 
                      ? 'bg-brand-ink text-white border-brand-ink' 
                      : 'border-brand-ink/10 hover:border-brand-ink/30'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Editorial Section */}
        <section className="bg-brand-accent/5 py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1000"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-serif">Conscious <br /><span className="italic">Craftsmanship</span></h2>
              <p className="text-lg text-brand-ink/70 leading-relaxed">
                We believe in quality over quantity. Every piece in our collection is crafted using 
                sustainable materials and ethical practices. Our goal is to create clothing that 
                lasts a lifetime, not just a season.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-serif text-2xl mb-2">100%</h4>
                  <p className="text-sm text-brand-ink/60">Organic Materials</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-2">Ethical</h4>
                  <p className="text-sm text-brand-ink/60">Production Chain</p>
                </div>
              </div>
              <button className="text-brand-ink font-medium border-b border-brand-ink pb-1 hover:opacity-60 transition-opacity">
                Read Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-6">Join the Inner Circle</h2>
          <p className="text-brand-ink/60 mb-10 italic">
            Receive early access to new collections, exclusive events, and styling inspiration.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white border border-brand-ink/10 rounded-full focus:outline-none focus:border-brand-ink/30 transition-colors"
            />
            <button className="px-10 py-4 bg-brand-ink text-white rounded-full font-medium hover:bg-brand-ink/90 transition-all">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-brand-ink text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold tracking-tighter">AURA & CO.</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Elevating the everyday through thoughtful design and exceptional quality.
              </p>
              <div className="flex gap-4">
                <Instagram size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-brand-accent cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Shop</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clothing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6 uppercase text-xs tracking-widest">Visit Us</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                123 Boutique Lane<br />
                Fashion District<br />
                New York, NY 10001
              </p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
            <p>© 2024 Aura & Co. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
