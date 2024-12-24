export interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  linkUrl: string;
  altText: string;
  className?: string;
}

export interface BannersProps {
  banners: BannerProps[];
}
