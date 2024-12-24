export interface NavBarProps {
  logo: string; // URL or path for the logo image
  links: { name: string; href: string }[]; // Array of links in the navigation bar
  backgroundColor?: string; // Optional background color for the navbar
}
