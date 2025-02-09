export interface MegaMenuItem {
  name: string;
  href: string;
  subLinks?: {
    name: string;
    href: string;
    image?: string;
    subLinks?: { name: string; href: string; image?: string }[];
  }[];
}

export interface MegaMenuNavBarProps {
  logo: string;
  links: MegaMenuItem[];
  backgroundColor?: string;
}
