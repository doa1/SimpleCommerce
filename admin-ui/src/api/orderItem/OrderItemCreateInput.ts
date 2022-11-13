import { OrderCreateNestedManyWithoutOrderItemsInput } from "./OrderCreateNestedManyWithoutOrderItemsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemCreateInput = {
  discount?: number | null;
  orders?: OrderCreateNestedManyWithoutOrderItemsInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
