import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  paymentMethod?: SortOrder;
  totalCost?: SortOrder;
  totalPaid?: SortOrder;
  updatedAt?: SortOrder;
};
