import './Tooltip.css';

export default function Tooltip({ content, children }: TooltipProps) {
  
  return (
    <span className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <span className="absolute left-1/2 top-10 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <span className="flex max-w-xs flex-col items-center shadow-lg">
          <span className="clip-bottom h-2 w-4 bg-primary"></span>
          <span className="rounded bg-primary p-2 text-center text-xs text-white">
            {content}
          </span>
        </span>
      </span>
    </span>
  );
}
