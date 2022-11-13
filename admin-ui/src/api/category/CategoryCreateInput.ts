import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  image_url?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
