import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERITEM_TITLE_FIELD } from "../orderItem/OrderItemTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="OrderItem"
          source="orderitem.id"
          reference="OrderItem"
        >
          <TextField source={ORDERITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TotalCost" source="totalCost" />
        <TextField label="TotalDiscount" source="totalDiscount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payment"
          target="OrderId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PaymentMethod" source="paymentMethod" />
            <TextField label="TotalCost" source="totalCost" />
            <TextField label="TotalPaid" source="totalPaid" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
