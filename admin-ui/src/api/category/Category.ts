import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  image_url: string | null;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
