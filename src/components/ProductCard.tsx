import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-black/5 rounded-2xl overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-ink hover:text-white"
        >
          <Plus size={20} />
        </button>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-xl group-hover:underline decoration-brand-ink/20 underline-offset-4">
          {product.name}
        </h3>
        <p className="text-brand-ink/60 text-sm line-clamp-1">{product.description}</p>
        <p className="font-medium mt-2">${product.price}</p>
      </div>
    </motion.div>
  );
};
