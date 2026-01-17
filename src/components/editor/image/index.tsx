import { useCallback } from "react";
import { Transforms, Path } from "slate";
import type { RenderElementProps } from "slate-react";
import { ReactEditor, useSlateStatic, useSelected } from "slate-react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/icons";
import { useDialogStore } from "@/components/dialog/use-dialog-store";
import type { ImageElement } from "@/slate-types";
import { BlockType, FloatType, AlignType } from "@/slate-types";
import { updateImage, removeImage, selectBlock } from "@/slate-utils";
import { Popover } from "../popover";
import { DialogEditImage } from "./dialog-edit-image";

export const Image = ({ attributes, children, element }: RenderElementProps) => {
  const { showDialog } = useDialogStore();
  const editor = useSlateStatic();
  const imageElement = element as ImageElement;

  const selected = useSelected();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // insert new paragraph after an embed element
      const path = ReactEditor.findPath(editor, imageElement);
      Transforms.insertNodes(editor, {
        type: BlockType.Paragraph,
        children: [{ text: "" }],
      }, {
        at: Path.next(path),
        select: true,
      });
    }
  };

  const doAction = useCallback((action: "w-25" | "w-50" | "w-100" | "float-left" | "float-right" | "edit" | "delete") => {
    switch (action) {
    case "w-25": updateImage(editor, imageElement, { width: "25%" }); break;
    case "w-50": updateImage(editor, imageElement, { width: "50%" }); break;
    case "w-100": updateImage(editor, imageElement, { width: "100%" }); break;
    case "float-left": updateImage(editor, imageElement, { float: imageElement.float !== FloatType.Left ? FloatType.Left : undefined }); break;
    case "float-right": updateImage(editor, imageElement, { float: imageElement.float !== FloatType.Right ? FloatType.Right : undefined }); break;
    case "edit": showDialog(
      <DialogEditImage imageElement={imageElement} onSubmit={(newImageElement) => {
        updateImage(editor, imageElement, newImageElement);
      }} />,
    );
      break;
    case "delete": removeImage(editor, imageElement); break;
    }
  }, [editor, imageElement, showDialog]);

  const popoverContent = (
    <>
      <button
        type="button"
        title="Set image width to 25%"
        onClick={() => doAction("w-25")}
        onMouseDown={(e) => e.preventDefault()}
      >
        25%
      </button>
      <button 
        type="button"
        title="Set image width to 50%"
        onClick={() => doAction("w-50")}
        onMouseDown={(e) => e.preventDefault()}
      >
        50%
      </button>
      <button
        type="button"
        title="Set image width to 100%"
        onClick={() => doAction("w-100")}
        onMouseDown={(e) => e.preventDefault()}
      >
        100%
      </button>
      
      <div className="divider"></div>

      <button
        type="button"
        title="Wrap text around left"
        className={cn(imageElement.float === FloatType.Left && "active")}
        onClick={() => doAction("float-left")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.FloatLeft size={16} />
      </button>
      <button
        type="button"
        title="Wrap text around right"
        className={cn(imageElement.float === FloatType.Right && "active")}
        onClick={() => doAction("float-right")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.FloatRight size={16} />
      </button>
      
      <div className="divider"></div>

      <button
        type="button"
        title="Edit Image"
        onClick={() => doAction("edit")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.Settings size={16} />
      </button>
      <button
        type="button"
        title="Remove Image"
        onClick={() => doAction("delete")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.Trash size={16} />
      </button>
    </>
  );

  const containerStyle: React.CSSProperties = {
    width: imageElement.width || "100%",
  };

  if (imageElement.float && imageElement.float !== FloatType.None) {
    containerStyle.float = imageElement.float;

    if (imageElement.float === FloatType.Left) {
      containerStyle.margin = "0 1em 1em 0";
    } else if (imageElement.float === FloatType.Right) {
      containerStyle.margin = "0 0 1em 1em";
    }
  } else if (imageElement.align) {
    switch (imageElement.align) {
    case AlignType.Center: { containerStyle.marginLeft = "auto"; containerStyle.marginRight = "auto"; containerStyle.display = "block"; } break;
    case AlignType.Right: { containerStyle.marginLeft = "auto"; containerStyle.display = "block"; } break;
    }
  }

  return (
    <Popover
      className={cn("image-container")}
      style={containerStyle}
      content={popoverContent}
    >
      <span {...attributes} onKeyDown={handleKeyDown} onMouseDown={() => selectBlock(editor, imageElement)}>
        <img
          className={cn(selected && "selected")}
          src={imageElement.url}
          alt={imageElement.alt || ""}
          contentEditable={false}
          draggable={false}
        />
        {children}
      </span>
    </Popover>
  );
};