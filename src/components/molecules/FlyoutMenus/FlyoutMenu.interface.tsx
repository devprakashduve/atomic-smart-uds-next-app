export interface FlyoutMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: FlyoutMenuItem[];
}

export interface FlyoutMenuItem {
  id: string;
  label: string;
  onClick: () => void;
}
