export interface Item {
  id: number;
  name: string;
  avatar?: string;
}

export interface SelectMenusProps {
  items: Item[];
  defaultSelected?: Item;
}
