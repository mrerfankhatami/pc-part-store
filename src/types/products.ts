export type ProductCategory =
  | "CPU"
  | "GPU"
  | "RAM"
  | "Motherboard"
  | "Storage"
  | "PSU"
  | "Case"
  | "Cooling";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  description: string;
  specs: Record<string, string>;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
