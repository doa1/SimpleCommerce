import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "paymentMethod";

export const PaymentTitle = (record: TPayment): string => {
  return record.paymentMethod || record.id;
};
