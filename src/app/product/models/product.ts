export interface Product {
  image: string | null;
  id: number | null;
  title: string | null;
  description: string | null;
  price: number | null;
}

export type ProductForm = Pick<Product, 'title' | 'description'>;
