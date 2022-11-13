import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderItemId?: SortOrder;
  totalCost?: SortOrder;
  totalDiscount?: SortOrder;
  updatedAt?: SortOrder;
};
