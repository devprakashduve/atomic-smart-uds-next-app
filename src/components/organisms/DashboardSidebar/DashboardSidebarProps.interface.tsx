export interface DashboardSideBarProps {
  navigationLinks: { label: string; icon: string; url: string }[]; // Navigation links in the sidebar
  logo: string; // URL or name of the logo image
  onLinkClick?: (url: string) => void; // Optional function to handle link clicks
}
