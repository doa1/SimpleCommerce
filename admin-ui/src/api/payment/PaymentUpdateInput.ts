import { CustomerUpdateManyWithoutPaymentsInput } from "./CustomerUpdateManyWithoutPaymentsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  customer?: CustomerUpdateManyWithoutPaymentsInput;
  order?: OrderWhereUniqueInput | null;
  paymentMethod?: string | null;
  totalCost?: number;
  totalPaid?: number | null;
};
