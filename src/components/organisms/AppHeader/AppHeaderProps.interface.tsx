export interface AppHeaderProps {
  logo: string; // URL or name of the logo image
  navigationLinks: { label: string; url: string }[]; // Links to display in the header navigation
  onSearch?: (query: string) => void; // Optional search handler
}
