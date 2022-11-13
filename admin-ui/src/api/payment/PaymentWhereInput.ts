import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PaymentWhereInput = {
  customer?: CustomerListRelationFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  paymentMethod?: StringNullableFilter;
  totalCost?: FloatFilter;
  totalPaid?: FloatNullableFilter;
};
