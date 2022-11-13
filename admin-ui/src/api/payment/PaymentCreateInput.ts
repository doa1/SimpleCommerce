import { CustomerCreateNestedManyWithoutPaymentsInput } from "./CustomerCreateNestedManyWithoutPaymentsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  customer?: CustomerCreateNestedManyWithoutPaymentsInput;
  order?: OrderWhereUniqueInput | null;
  paymentMethod?: string | null;
  totalCost: number;
  totalPaid?: number | null;
};
