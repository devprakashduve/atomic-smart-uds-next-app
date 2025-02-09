export interface NavBarProps {
  logo: string;
  links: {
    name: string;
    href: string;
    subLinks?: {
      name: string;
      href: string;
    }[];
  }[];
  backgroundColor?: string;
}
