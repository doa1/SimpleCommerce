import { OrderUpdateManyWithoutOrderItemsInput } from "./OrderUpdateManyWithoutOrderItemsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  discount?: number | null;
  orders?: OrderUpdateManyWithoutOrderItemsInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
