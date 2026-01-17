import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useFloating, autoUpdate, offset, flip, shift } from "@floating-ui/react";
import { cn } from "@/lib/utils";

interface PopoverState<T = any> {
  element: T;
  rect: DOMRect;
  content: ReactNode;
  key: string;
}

interface ElementPopoverContextType {
  showPopover: <T>(element: T, rect: DOMRect, content: ReactNode, key: string) => void;
  hidePopover: () => void;
}

const ElementPopoverContext = createContext<ElementPopoverContextType | null>(null);

export const useElementPopover = () => {
  const context = useContext(ElementPopoverContext);
  if (!context) {
    throw new Error("useElementPopover must be used within ElementPopoverProvider");
  }
  return context;
};

interface ElementPopoverProviderProps {
  children: ReactNode;
}

export const ElementPopoverProvider = ({ children }: ElementPopoverProviderProps) => {
  const [popoverState, setPopoverState] = useState<PopoverState | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const isElementHoveredRef = useRef(false);
  const isPopoverHoveredRef = useRef(false);

  const showPopover = useCallback(<T,>(
    element: T,
    rect: DOMRect,
    content: ReactNode,
    key: string,
  ) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    isElementHoveredRef.current = true;
    setPopoverState({ element, rect, content, key });
  }, []);

  const hidePopover = useCallback(() => {  
    setTimeout(() => {
      isElementHoveredRef.current = false;
    }, 50);
    
    if (isPopoverHoveredRef.current) {
      return;
    }
    
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    const id = window.setTimeout(() => {
      if (!isElementHoveredRef.current && !isPopoverHoveredRef.current) {
        setPopoverState(null);
      }
      timeoutRef.current = null;
    }, 100);
    timeoutRef.current = id;
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <ElementPopoverContext.Provider value={{ showPopover, hidePopover }}>
      {children}
      {popoverState && (
        <ElementPopoverContent
          rect={popoverState.rect}
          content={popoverState.content}
          key={popoverState.key}
          onPopoverEnter={() => { isPopoverHoveredRef.current = true; }}
          onPopoverLeave={() => { 
            isPopoverHoveredRef.current = false;
            hidePopover();
          }}
        />
      )}
    </ElementPopoverContext.Provider>
  );
};

interface ElementPopoverContentProps {
  rect: DOMRect;
  content: ReactNode;
  key: string;
  onPopoverEnter: () => void;
  onPopoverLeave: () => void;
}

const ElementPopoverContent = ({ rect, content, onPopoverEnter, onPopoverLeave }: ElementPopoverContentProps) => {
  const { refs, floatingStyles, placement } = useFloating({
    placement: "top",
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    refs.setReference({
      getBoundingClientRect: () => rect,
    });

    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, [rect, refs]);

  const portalContainer = document.querySelector("iframe")?.contentDocument?.body || document.body;
  
  const isTop = placement.startsWith("top");
  const bridgeStyle = isTop ? { bottom: "-8px" } : { top: "-8px" };

  return createPortal(
    <div
      ref={refs.setFloating}
      style={{ ...floatingStyles }}
      className={cn("popover", isReady && "visible")}
      onMouseEnter={onPopoverEnter}
      onMouseLeave={onPopoverLeave}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "12px",
          background: "transparent",
          ...bridgeStyle,
        }}
      />
      {content}
    </div>,
    portalContainer,
  );
};