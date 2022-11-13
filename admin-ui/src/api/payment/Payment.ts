import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Payment = {
  createdAt: Date;
  customer?: Array<Customer>;
  id: string;
  order?: Order | null;
  paymentMethod: string | null;
  totalCost: number;
  totalPaid: number | null;
  updatedAt: Date;
};
