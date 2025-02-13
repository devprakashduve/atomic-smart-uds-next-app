export interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}

export interface NavBarLogoLinksProps {
  logo: string;
  links: NavLink[];
  backgroundColor?: string;
}
