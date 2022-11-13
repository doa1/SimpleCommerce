import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  customer?: Customer;
  id: string;
  orderItem?: OrderItem;
  payments?: Array<Payment>;
  totalCost: number | null;
  totalDiscount: number | null;
  updatedAt: Date;
};
