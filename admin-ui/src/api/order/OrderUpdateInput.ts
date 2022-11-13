import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  orderItem?: OrderItemWhereUniqueInput;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  totalCost?: number | null;
  totalDiscount?: number | null;
};
