/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  customer!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereUniqueInput)
  @Field(() => OrderItemWhereUniqueInput)
  orderItem!: OrderItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalCost?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalDiscount?: number | null;
}
export { OrderCreateInput };
