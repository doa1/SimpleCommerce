import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orderitems?: OrderItemUpdateManyWithoutProductsInput;
};
