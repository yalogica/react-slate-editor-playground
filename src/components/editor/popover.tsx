import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Popover = ({ className, style, children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const show = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(true);
  };

  const hide = () => {
    const id = window.setTimeout(() => {
      setIsVisible(false);
      timeoutRef.current = null;
    }, 100);
    timeoutRef.current = id;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
};