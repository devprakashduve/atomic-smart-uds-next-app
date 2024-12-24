export interface Breadcrumb {
  label: string; // The label for the breadcrumb
  href?: string; // Optional: The link for the breadcrumb, if it is a link
}

export interface BreadcrumbProps {
  items: Breadcrumb[]; // List of breadcrumb items
}
