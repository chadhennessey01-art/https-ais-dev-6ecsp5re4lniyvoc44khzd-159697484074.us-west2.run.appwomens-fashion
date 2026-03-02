export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'clothing' | 'accessory' | 'shoes';
  image: string;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
