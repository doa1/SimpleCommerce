import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  discount: number | null;
  id: string;
  orders?: Array<Order>;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
