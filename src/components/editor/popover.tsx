import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Popover = ({ className, style, children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const show = () => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(true);
  };

  const hide = () => {
    const id = window.setTimeout(() => {
      setIsVisible(false);
      setTimeoutId(null);
    }, 100);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <span
      className={className}
      style={style}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}

      <span
        contentEditable={false}
        data-slate-spacer={true}
        className={cn("popover", isVisible && "visible")}
        onMouseDown={(e) => e.preventDefault()}
      >
        {content}
      </span>
    </span>
  );
}