import { useCallback } from "react";
import type { RenderElementProps } from "slate-react";
import { useSlateStatic } from "slate-react";
import { Icons } from "@/lib/icons";
import { useDialogStore } from "@/components/dialog/use-dialog-store";
import type { LinkElement } from "@/slate-types";
import { updateLink, removeLink } from "@/slate-utils";
import { Popover } from "../popover";
import { DialogEditLink } from "./dialog-edit-link";

interface LinkProps extends RenderElementProps {
  style: React.CSSProperties;
}

export const Link = ({ attributes, children, element, style }: LinkProps) => {
  const { showDialog } = useDialogStore();
  const editor = useSlateStatic();
  const linkElement = element as LinkElement;

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
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.FollowLink size={16} />
      </button>
      <button 
        type="button"
        title="Edit Link"
        onClick={() => doAction("edit")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.Settings size={16} />
      </button>
      <button 
        type="button"
        title="Remove Link"
        onClick={() => doAction("delete")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.Unlink size={16} />
      </button>
    </>
  );

  return (
    <Popover
      className="link-container"
      content={popoverContent}
    >
      <a
        style={style}
        {...attributes}
        href={linkElement.url}
        title={linkElement.title}
        target={linkElement.target}
        rel={linkElement.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </Popover>
  );
};