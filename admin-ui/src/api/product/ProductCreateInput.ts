import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orderitems?: OrderItemCreateNestedManyWithoutProductsInput;
};
