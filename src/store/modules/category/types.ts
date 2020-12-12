export interface InterfaceCategoryState {
  categories: InterfaceCategory[] | null;
  category: InterfaceCategory | null;
}

export interface InterfaceCategory {
  id: string;
  limit: number;
  name: string;
}
