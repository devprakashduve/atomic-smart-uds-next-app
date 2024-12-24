export interface VideoProps {
  src: string; // The source URL for the video
  alt?: string; // Alt text for the video (typically description)
  controls?: boolean; // Optional: Show controls for the video
  autoplay?: boolean; // Optional: Autoplay the video
  loop?: boolean; // Optional: Loop the video
  muted?: boolean; // Optional: Mute the video
  width?: string; // Optional: Set width of the video (e.g., '100%', '500px')
  height?: string; // Optional: Set height of the video (e.g., 'auto', '300px')
}
