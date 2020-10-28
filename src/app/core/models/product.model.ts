export interface Product {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    brand: string;
    price: number;
    stock: number;
    selected: boolean; // For UI only
  }
  