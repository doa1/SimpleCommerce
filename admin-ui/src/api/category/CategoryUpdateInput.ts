import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  image_url?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
