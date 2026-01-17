import { useCallback, useRef } from "react";
import type { RenderElementProps } from "slate-react";
import { useSlateStatic } from "slate-react";
import { Icons } from "@/lib/icons";
import { useDialogStore } from "@/components/dialog/use-dialog-store";
import type { LinkElement } from "@/slate-types";
import { updateLink, removeLink } from "@/slate-utils";
import { DialogEditLink } from "./dialog-edit-link";
import { useElementPopover } from "../element-popover-provider";

interface LinkProps extends RenderElementProps {
  style: React.CSSProperties;
}

export const Link = ({ attributes, children, element, style }: LinkProps) => {
  const { showDialog } = useDialogStore();
  const { showPopover, hidePopover } = useElementPopover();

  const editor = useSlateStatic();
  const linkElement = element as LinkElement;
  
  const { ref: slateRef, ...restAttributes } = attributes;
  const linkRef = useRef<HTMLAnchorElement>(null);

  const doAction = useCallback((action: "open" | "edit" | "delete") => {
    switch (action) {
    case "open": {
      const url = linkElement.url.trim();

      if (!url) return;

      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      const newWindow = window.open(fullUrl, "_blank", "noopener,noreferrer");

      if (newWindow) {
        newWindow.opener = null;
      }
    } break;
    case "edit": {
      showDialog(
        <DialogEditLink linkElement={linkElement} onSubmit={(newLinkElement) => {
          updateLink(editor, linkElement, newLinkElement);
        }} />,
      );
    } break;
    case "delete": {
      removeLink(editor, linkElement);
    } break;
    }
  }, [editor, linkElement, showDialog]);

  const popoverContent = (
    <>
      <button
        type="button"
        title="Open Link"
        onClick={() => doAction("open")}
      >
        <Icons.FollowLink size={16} />
      </button>
      <button 
        type="button"
        title="Edit Link"
        onClick={() => doAction("edit")}
      >
        <Icons.Settings size={16} />
      </button>
      <button 
        type="button"
        title="Remove Link"
        onClick={() => doAction("delete")}
      >
        <Icons.Unlink size={16} />
      </button>
    </>
  );

  const handleMouseEnter = useCallback(() => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      showPopover(linkElement, rect, popoverContent, "link");
    }
  }, [linkElement, showPopover, popoverContent]);

  const handleMouseLeave = useCallback(() => {
    hidePopover();
  }, [hidePopover]);

  return (
    <a
      ref={(node) => {
        slateRef?.(node);
        linkRef.current = node;
      }}
      {...restAttributes}
      style={style}
      href={linkElement.url}
      title={linkElement.title}
      target={linkElement.target}
      rel={linkElement.target === "_blank" ? "noopener noreferrer" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};