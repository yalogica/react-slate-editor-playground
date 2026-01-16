import { useCallback } from "react"
import { Transforms, Path } from "slate"
import { ReactEditor, useSlateStatic, useSelected, RenderElementProps } from "slate-react"
import { cn } from "@/lib/utils"
import { Icons } from "@/lib/icons"
import { useDialogStore } from "@/components/dialog/use-dialog-store"
import { EmbedElement, BlockType, FloatType, AlignType } from "@/slate-types"
import { updateEmbed, removeEmbed, selectBlock } from "@/slate-utils"
import { Popover } from "../popover"
import { DialogEditEmbed } from "./dialog-edit-embed"

export const Embed = ({ attributes, children, element }: RenderElementProps) => {
  const { showDialog } = useDialogStore();
  const editor = useSlateStatic();
  const embedElement = element as EmbedElement;

  const selected = useSelected();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // insert new paragraph after an embed element
      const path = ReactEditor.findPath(editor, embedElement);
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
      case "w-25": updateEmbed(editor, embedElement, { width: "25%" }); break;
      case "w-50": updateEmbed(editor, embedElement, { width: "50%" }); break;
      case "w-100": updateEmbed(editor, embedElement, { width: "100%" }); break;
      case "float-left": updateEmbed(editor, embedElement, { float: embedElement.float !== FloatType.Left ? FloatType.Left : undefined }); break;
      case "float-right": updateEmbed(editor, embedElement, { float: embedElement.float !== FloatType.Right ? FloatType.Right : undefined }); break;
      case "edit": showDialog(
        <DialogEditEmbed embedElement={embedElement} onSubmit={(newEmbedElement) => {
          updateEmbed(editor, embedElement, newEmbedElement);
        }} />
      );
        break;
      case "delete": removeEmbed(editor, embedElement); break;
    }
  }, [editor, embedElement, showDialog]);

  const popoverContent = (
    <>
      <button
        type="button"
        title="Set embed width to 25%"
        onClick={() => doAction("w-25")}
        onMouseDown={(e) => e.preventDefault()}
      >
        25%
      </button>
      <button 
        type="button"
        title="Set embed width to 50%"
        onClick={() => doAction("w-50")}
        onMouseDown={(e) => e.preventDefault()}
      >
        50%
      </button>
      <button
        type="button"
        title="Set embed width to 100%"
        onClick={() => doAction("w-100")}
        onMouseDown={(e) => e.preventDefault()}
      >
        100%
      </button>
      
      <div className="divider"></div>

      <button
        type="button"
        title="Wrap text around left"
        className={cn(embedElement.float === FloatType.Left && "active")}
        onClick={() => doAction("float-left")}
        onMouseDown={(e) => e.preventDefault()}
      >
        <Icons.FloatLeft size={16} />
      </button>
      <button
        type="button"
        title="Wrap text around right"
        className={cn(embedElement.float === FloatType.Right && "active")}
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
    width: embedElement.width || "100%",
    height: embedElement.height || "auto",
    aspectRatio: embedElement.height ? "auto" : "16 / 9"
  }

  if (embedElement.float && embedElement.float !== FloatType.None) {
    containerStyle.float = embedElement.float;

    if (embedElement.float === FloatType.Left) {
      containerStyle.margin = "0 1em 1em 0";
    } else if (embedElement.float === FloatType.Right) {
      containerStyle.margin = "0 0 1em 1em";
    }
  } else if (embedElement.align) {
    switch (embedElement.align) {
      case AlignType.Center: { containerStyle.marginLeft = "auto"; containerStyle.marginRight = "auto"; containerStyle.display = "block"; } break;
      case AlignType.Right: { containerStyle.marginLeft = "auto"; containerStyle.display = "block"; } break;
    }
  }

  return (
    <Popover
      className={cn("embed-container")}
      style={containerStyle}
      content={popoverContent}
    >
      <span {...attributes} onKeyDown={handleKeyDown} onMouseDown={() => selectBlock(editor, embedElement)}>
        <iframe
          className={cn(selected && "selected")}
          src={embedElement.url}
          title={embedElement.url}
          width="100%" 
          height="100%"
          contentEditable={false}
          draggable={false}
        />
        {children}
      </span>
    </Popover>
  )
}