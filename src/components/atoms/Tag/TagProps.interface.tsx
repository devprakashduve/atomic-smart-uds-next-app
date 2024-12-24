export interface TagProps {
  label: string; // The label/text of the tag
  color?: string; // Optional color for the tag
  onClick?: () => void; // Optional callback for click event
  removable?: boolean; // Optional flag to show remove icon
}
