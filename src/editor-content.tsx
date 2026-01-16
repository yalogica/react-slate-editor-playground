import isHotkey from "is-hotkey"
import React, { useRef, useState, useCallback, useEffect, KeyboardEvent } from "react"
import { createPortal } from "react-dom"
import { Descendant, Transforms } from "slate"
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react"
import { cn } from "@/lib/utils"
import { EDITOR_STYLES, HOTKEYS } from "@/editor-types"
import { BlockType, CustomEditor } from "@/slate-types"
import { toggleMark, supportsAlign } from "@/slate-utils"
import { Link } from "@/components/editor/link"
import { Image } from "@/components/editor/image"
import { Embed } from "@/components/editor/embed"

interface EditorContentProps {
  isExpanded: boolean;
  editor: CustomEditor;
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

export const EditorContent = ({ editor, isExpanded, value, onChange }: EditorContentProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, e as any)) {
        e.preventDefault();
        const mark = HOTKEYS[hotkey];
        toggleMark(editor, mark);
      }
    }

    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        Transforms.insertText(editor, "\n");
        return;
      }

      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      
        Transforms.insertNodes(editor, 
          {
            type: BlockType.Paragraph,
            children: [{ text: "" }],
            align: undefined,
          }, {
            mode: "highest",
            select: true,
          }
        );
        return;
      }
    }
  }, [editor]);

  const handlePointerDown = useCallback(() => {
    const pointerEvent = new PointerEvent("pointerdown", { bubbles: true, cancelable: true });
    document.body.dispatchEvent(pointerEvent);
  }, [editor]);

  return (
    <div className="flex-1">
      <IFrame>
        <Editable
          placeholder="Enter some rich text…"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
        />
      </IFrame>
    </div>
  )
}

interface IFrameProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  children: React.ReactNode
}

const IFrame = ({ children }: IFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);
 
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    doc.head.innerHTML = "";
    doc.body.innerHTML = "";

    const style = doc.createElement("style");
    style.textContent = EDITOR_STYLES;
    doc.head.appendChild(style);
    
    setIframeBody(doc.body);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className={cn("w-full h-full")}
      sandbox="allow-same-origin allow-scripts"
      loading="lazy"
    >
      { iframeBody && createPortal(children, iframeBody) }
    </iframe>
  )
}

const renderElement = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const style: React.CSSProperties = {};

  if (element.type && supportsAlign(element.type as BlockType) && "align" in element && element.align != undefined) {
    style.textAlign = element.align;
  }

  switch (element.type) {
    case BlockType.HeadingOne: return <h1 style={style} {...attributes}>{children}</h1>;
    case BlockType.HeadingTwo: return <h2 style={style} {...attributes}>{children}</h2>;
    case BlockType.HeadingThree: return <h3 style={style} {...attributes}>{children}</h3>;
    case BlockType.HeadingFour: return <h4 style={style} {...attributes}>{children}</h4>;
    case BlockType.HeadingFive: return <h5 style={style} {...attributes}>{children}</h5>;
    case BlockType.HeadingSix: return <h6 style={style} {...attributes}>{children}</h6>;
    case BlockType.BlockQuote: return <blockquote style={style} {...attributes}>{children}</blockquote>;
    case BlockType.BulletedList: return <ul style={style} {...attributes}>{children}</ul>;
    case BlockType.NumberedList: return <ol style={style} {...attributes}>{children}</ol>;
    case BlockType.ListItem: return <li style={style} {...attributes}>{children}</li>;
    case BlockType.Link: return <Link style={style} {...props} />
    case BlockType.Image: return <Image {...props} />
    case BlockType.Embed: return <Embed {...props} />
    
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const tags = [];

  if (leaf.bold) tags.push("strong");
  if (leaf.italic) tags.push("em");
  if (leaf.underline) tags.push("u");
  if (leaf.strikethrough) tags.push("del");
  if (leaf.code) tags.push("code");
  if (leaf.superscript) tags.push("sup");
  if (leaf.subscript) tags.push("sub");

  const content = tags.reduceRight(
    (child, tag) => React.createElement(tag, {}, child),
    children
  );

  return <span {...attributes}>{content}</span>;
}