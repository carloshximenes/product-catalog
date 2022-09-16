export interface Product {
  productId: number;
  name: string;
  price: number;
  retailPrice: number;
  thumbnailUrl: string;
  pictureUrl: string;
  description: string;
  category: string;
  categoryId: number;
  brand: string;
  color: string;
  badges: string;
  ratingAvg: number;
  ratingCount: number;
  stock: number;
  dateCreated: Date;
}
