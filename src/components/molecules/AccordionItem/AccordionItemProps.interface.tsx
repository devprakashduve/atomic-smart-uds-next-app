export interface AccordionItemProps {
  title: string; // Title of the accordion item
  content: string | React.ReactNode; // Content to display when the accordion item is expanded
  isOpen?: boolean; // Optional: Determines if the item is open by default
}

export interface AccordionProps {
  items: AccordionItemProps[]; // List of accordion items
}
