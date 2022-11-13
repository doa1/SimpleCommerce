import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  image_url?: StringNullableFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
