import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer: CustomerWhereUniqueInput;
  orderItem: OrderItemWhereUniqueInput;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  totalCost?: number | null;
  totalDiscount?: number | null;
};
