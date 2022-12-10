export enum ProductCategory {
  PERFUMES = "PERFUMES",
  FOOD = "FOOD",
  TECHNOLOGY = "TECHNOLOGY",
}

type ProductCategoriesTranslations = {
  [name: string]: string;
};

const translations: ProductCategoriesTranslations = {
  [ProductCategory.PERFUMES]: "Perfume",
  [ProductCategory.FOOD]: "Dairy products",
  [ProductCategory.TECHNOLOGY]: "IT Stuff",
};

export const getCategoryName = (name: ProductCategory) =>
  !translations.hasOwnProperty(name.toString()) ? "" : translations[name];
