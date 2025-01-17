interface ProductTimerProps {
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  export function ProductTimer({ hours, minutes, seconds }: ProductTimerProps) {
    return (
      <div className="flex items-center gap-2 text-red-500">
        <span className="w-4 h-4">⏰</span>
        <span>{hours.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{minutes.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span>{seconds.toString().padStart(2, '0')}</span>
      </div>
    );
  }