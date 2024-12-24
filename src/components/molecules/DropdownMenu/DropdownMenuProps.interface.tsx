export interface DropdownMenuItem {
  label: string; // Label of the dropdown item
  onClick: () => void; // Action to be executed on click
  disabled?: boolean; // Optional: Whether the item is disabled
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[]; // List of menu items
  buttonLabel: string; // Label for the button that triggers the dropdown
}
