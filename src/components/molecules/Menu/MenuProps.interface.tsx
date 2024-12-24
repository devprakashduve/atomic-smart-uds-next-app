export interface MenuItem {
  label: string; // Text to display for the menu item
  onClick: () => void; // Action to perform when the item is clicked
  icon?: React.ReactNode; // Optional icon to display next to the label
  disabled?: boolean; // Optional: Disable the menu item
}

export interface MenuProps {
  items: MenuItem[]; // List of menu items
  className?: string; // Optional additional className for the menu container
}
