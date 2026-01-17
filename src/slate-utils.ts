
import { Editor as SlateEditor, Element as SlateElement, Node as SlateNode, Transforms, Path, Range } from "slate";
import { ReactEditor } from "slate-react";
import type { CustomEditor, CustomElement, LinkElement, ImageElement, EmbedElement, AlignType, MarkType, FloatType } from "@/slate-types";
import { BlockType } from "@/slate-types";

const ELEMENTS_WITH_ALIGN = [
  BlockType.Paragraph,
  BlockType.HeadingOne,
  BlockType.HeadingTwo,
  BlockType.HeadingThree,
  BlockType.HeadingFour,
  BlockType.HeadingFive,
  BlockType.HeadingSix,
  BlockType.BlockQuote,
  BlockType.BulletedList,
  BlockType.NumberedList,
  BlockType.Image,
  BlockType.Embed,
] as const;

const SUPPORTS_ALIGN_SET = new Set<string>(ELEMENTS_WITH_ALIGN);

export const supportsAlign = (type: string): boolean => {
  return SUPPORTS_ALIGN_SET.has(type);
};

export const getActiveAlign = (editor: CustomEditor): AlignType | null => {
  const { selection } = editor;
  if (!selection) return null;

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n),
    }),
  );

  const element = match ? match[0] : null;
  return (element != null && "align" in element) ? element.align ?? null : null;
};

export const isAlignActive = (editor: CustomEditor, alignType: AlignType): boolean => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n),
    }),
  );

  const element = match ? match[0] : null;
  return element != null && "align" in element && element.align === alignType;
};

export const toggleAlign = (editor: CustomEditor, alignType: AlignType) => {
  const isActive = isAlignActive(editor, alignType);

  Transforms.setNodes<CustomElement>(
    editor,
    { align: isActive ? undefined : alignType },
    {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        supportsAlign(n.type as BlockType),
      mode: "highest",
    },
  );
};

export const isMarkActive = (editor: CustomEditor, markType: MarkType): boolean => {
  const marks = SlateEditor.marks(editor);
  return marks ? marks[markType] === true : false;
};

export const toggleMark = (editor: CustomEditor, markType: MarkType) => {
  const isActive = isMarkActive(editor, markType);
  if (isActive) {
    editor.removeMark(markType);
  } else {
    editor.addMark(markType, true);
  }
};

export const applyColor = (editor: CustomEditor, color: string | null) => {
  if (color === null) {
    SlateEditor.removeMark(editor, "color");
  } else {
    SlateEditor.addMark(editor, "color", color);
  }
};

export const applyBackgroundColor = (editor: CustomEditor, color: string | null) => {
  if (color === null) {
    SlateEditor.removeMark(editor, "backgroundColor");
  } else {
    SlateEditor.addMark(editor, "backgroundColor", color);
  }
};

export const getActiveColor = (editor: CustomEditor): string | null => {
  const marks = SlateEditor.marks(editor);
  return marks?.color ? String(marks.color) : null;
};

export const getActiveBackgroundColor = (editor: CustomEditor): string | null => {
  const marks = SlateEditor.marks(editor);
  return marks?.backgroundColor ? String(marks.backgroundColor) : null;
};

export const getActiveBlock = (editor: CustomEditor, mode?: "lowest" | "highest" | "all"): CustomElement | null => {
  const { selection } = editor;
  if (!selection) return null;

  const [match] = SlateEditor.nodes<SlateElement>(editor, {
    at: SlateEditor.unhangRange(editor, selection),
    match: (n) =>
      !SlateEditor.isEditor(n) &&
      SlateElement.isElement(n),
    mode: mode ?? "highest",
  });

  return match ? match[0] : null;
};

export const isBlockActive = (editor: CustomEditor, blockType: BlockType, mode?: "lowest" | "highest" | "all"): boolean => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === blockType,
      mode: mode ?? "highest",
    }),
  );

  return !!match;
};

export const toggleBlock = (editor: CustomEditor, blockType: BlockType) => {
  const isActive = isBlockActive(editor, blockType);
  const isList = blockType === BlockType.BulletedList || blockType === BlockType.NumberedList;

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !SlateEditor.isEditor(n) &&
      SlateElement.isElement(n) &&
      (n.type === BlockType.BulletedList || n.type === BlockType.NumberedList),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive
      ? BlockType.Paragraph
      : isList
        ? BlockType.ListItem
        : blockType,
  });

  if (isList && !isActive) {
    Transforms.wrapNodes(editor, {
      type: blockType,
      children: [],
    });
  }
};

export const selectBlock = (editor: CustomEditor, element: CustomElement) => {
  const path = ReactEditor.findPath(editor, element);
  const range = SlateEditor.range(editor, path);

  Transforms.select(editor, range);
};

export const deleteBlock = (editor: CustomEditor, element: CustomElement) => {
  const path = ReactEditor.findPath(editor, element);
  const range = SlateEditor.range(editor, path);

  Transforms.delete(editor, { at: range });
};

export const indentListItem = (editor: CustomEditor) => {
  const { selection } = editor;
  if (!selection) return;

  const [listItem] = Array.from(
    SlateEditor.nodes(editor, {
      at: SlateEditor.unhangRange(editor, selection),
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n as CustomElement).type === BlockType.ListItem,
    }),
  );

  if (!listItem) return;

  const [listNodes] = Array.from(
    SlateEditor.nodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n.type === BlockType.BulletedList || n.type === BlockType.NumberedList),
    }),
  );

  if (listNodes) {
    const [parentList] = listNodes;
    const listType = (parentList as CustomElement).type;

    Transforms.wrapNodes(
      editor,
      { type: listType, children: [] } as CustomElement,
      {
        match: (n) =>
          !SlateEditor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === BlockType.ListItem,
      },
    );
  }
};

export const outdentListItem = (editor: CustomEditor) => {
  const { selection } = editor;
  if (!selection) return;

  const listNodes = Array.from(
    SlateEditor.nodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n.type === BlockType.BulletedList || n.type === BlockType.NumberedList),
    }),
  );

  if (listNodes.length > 1) {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        (n.type === BlockType.BulletedList || n.type === BlockType.NumberedList),
      split: true,
    });
  } else if (listNodes.length === 1) {
    toggleBlock(editor, BlockType.Paragraph);
  }
};

export const createLinkElement = (url: string, text: string): LinkElement => {
  return {
    type: BlockType.Link,
    url: url,
    children: [{ text }],
  };
};

export const insertLink = (editor: CustomEditor, linkElement: LinkElement) => {
  const { selection } = editor;

  const createLinkWithText = (text: string): LinkElement => ({
    ...linkElement,
    children: [{ text }],
  });

  if (!selection) {
    Transforms.insertNodes(editor, {
      type: BlockType.Paragraph,
      children: [createLinkWithText(linkElement.children.length > 0 ? SlateNode.string(linkElement) : linkElement.url)],
    });
    return;
  }

  const [parent, parentPath] = SlateEditor.parent(editor, selection.focus.path);
  if ((parent as CustomElement).type === BlockType.Link) {
    removeLink(editor, parent as LinkElement);
  }

  const selectedText = Range.isCollapsed(selection) ? "" : SlateEditor.string(editor, selection);
  const linkText = linkElement.children.length > 0 ? SlateNode.string(linkElement) : linkElement.url;
  const linkToInsert = createLinkWithText(linkText || selectedText);

  if (editor.isVoid(parent as CustomElement)) {
    Transforms.insertNodes(editor, {
      type: BlockType.Paragraph,
      children: [linkToInsert],
    }, {
      at: Path.next(parentPath),
      select: true,
    });
    return;
  }

  Transforms.insertNodes(editor, linkToInsert, { select: true });
};

export const updateLink = (editor: CustomEditor, linkElement: LinkElement, updates: Partial<LinkElement>) => {
  const { children, type: _type, ...linkProps } = updates;
  const path = ReactEditor.findPath(editor, linkElement);

  if (Object.keys(linkProps).length > 0) {
    Transforms.setNodes(editor, linkProps, {
      at: path,
      match: n =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Link,
    });
  }

  if (children) {
    const text = children[0].text;
    Transforms.insertText(editor, text, { at: path });
  }
};

export const removeLink = (editor: CustomEditor, linkElement?: LinkElement) => {
  if (linkElement) {
    const path = ReactEditor.findPath(editor, linkElement);

    Transforms.unwrapNodes(editor, {
      at: path,
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Link,
    });
  } else {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Link,
    });
  }
};

export const createImageElement = (url: string, alt?: string, width?: string, float?: FloatType): ImageElement => {
  return {
    type: BlockType.Image,
    url: url,
    alt: alt,
    width: width,
    float: float,
    children: [{ text: "" }],
  };
};

export const insertImage = (editor: CustomEditor, imageElement: ImageElement) => {
  const { selection } = editor;

  const imageToInsert: ImageElement = {
    ...imageElement,
    children: [{ text: "" }],
  };

  if (!selection) {
    Transforms.insertNodes(editor, {
      type: BlockType.Paragraph,
      children: [imageToInsert],
    });
    return;
  }

  const [parent, parentPath] = SlateEditor.parent(editor, selection.focus.path);

  if (editor.isVoid(parent as any)) {
    Transforms.insertNodes(editor, imageToInsert, {
      at: Path.next(parentPath),
      select: true,
    });
    return;
  }

  Transforms.insertNodes(editor, imageToInsert, { select: true });
};

export const updateImage = (editor: CustomEditor, imageElement: ImageElement, updates: Partial<ImageElement>) => {
  const { children: _children, type: _type, ...imageProps } = updates;
  const path = ReactEditor.findPath(editor, imageElement);

  if (Object.keys(imageProps).length > 0) {
    Transforms.setNodes(editor, imageProps, {
      at: path,
      match: n =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Image,
    });
  }
};

export const removeImage = (editor: CustomEditor, imageElement?: ImageElement) => {
  if (imageElement) {
    const path = ReactEditor.findPath(editor, imageElement);

    Transforms.removeNodes(editor, {
      at: path,
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Image,
    });
  } else {
    Transforms.removeNodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Image,
    });
  }
};

export const createEmbedElement = (url: string, width?: string, height?: string, float?: FloatType): EmbedElement => {
  return {
    type: BlockType.Embed,
    url: url,
    width: width,
    height: height,
    float: float,
    children: [{ text: "" }],
  };
};

export const insertEmbed = (editor: CustomEditor, embedElement: EmbedElement) => {
  const { selection } = editor;

  const embedToInsert: EmbedElement = {
    ...embedElement,
    children: [{ text: "" }],
  };

  if (!selection) {
    Transforms.insertNodes(editor, {
      type: BlockType.Paragraph,
      children: [embedToInsert],
    });
    return;
  }

  const [parent, parentPath] = SlateEditor.parent(editor, selection.focus.path);

  if (editor.isVoid(parent as any)) {
    Transforms.insertNodes(editor, embedToInsert, {
      at: Path.next(parentPath),
      select: true,
    });
    return;
  }

  Transforms.insertNodes(editor, embedToInsert, { select: true });
};

export const updateEmbed = (editor: CustomEditor, embedElement: EmbedElement, updates: Partial<EmbedElement>) => {
  const { children: _children, type: _type, ...embedProps } = updates;
  const path = ReactEditor.findPath(editor, embedElement);

  if (Object.keys(embedProps).length > 0) {
    Transforms.setNodes(editor, embedProps, {
      at: path,
      match: n =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Embed,
    });
  }
};

export const removeEmbed = (editor: CustomEditor, embedElement?: EmbedElement) => {
  if (embedElement) {
    const path = ReactEditor.findPath(editor, embedElement);

    Transforms.removeNodes(editor, {
      at: path,
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Embed,
    });
  } else {
    Transforms.removeNodes(editor, {
      match: (n) =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === BlockType.Embed,
    });
  }
};

export const getSelectedText = (editor: CustomEditor): string => {
  if (!editor.selection) return "";
  return SlateEditor.string(editor, editor.selection);
};

export const getTextContent = (nodes: any[]): string => {
  return nodes
    .map((node: any) => {
      if (node.text !== undefined) {
        return node.text;
      }
      if (node.children) {
        return getTextContent(node.children);
      }
      return "";
    })
    .join("");
};

export const countWords = (text: string): number => {
  const trimmed = text.trim();
  if (trimmed === "") return 0;

  return trimmed.split(/\s+/).filter(word => word.length > 0).length;
};

export const countCharacters = (text: string): number => {
  return text.length;
};

export const countCharactersNoSpaces = (text: string): number => {
  return text.replace(/\s/g, "").length;
};

export const withLinks = (editor: CustomEditor) => {
  const { isInline } = editor;
  editor.isInline = (element) => element.type === BlockType.Link ? true : isInline(element);
  return editor;
};

export const withEmbeds = (editor: CustomEditor) => {
  const { isVoid, insertBreak } = editor;

  editor.isVoid = (element: CustomElement) => {
    return [BlockType.Image, BlockType.Embed].includes(element.type) ? true : isVoid(element);
  };

  editor.insertBreak = () => {
    const [voidNode] = SlateEditor.nodes(editor, {
      match: n =>
        !SlateEditor.isEditor(n) &&
        SlateElement.isElement(n) &&
        editor.isVoid(n),
    });

    if (voidNode) {
      const path = ReactEditor.findPath(editor, voidNode[0]);

      Transforms.insertNodes(editor, {
        type: BlockType.Paragraph,
        children: [{ text: "" }],
      }, {
        at: Path.next(path),
        select: true,
      },
      );

      return;
    }

    insertBreak();
  };

  return editor;
};

export const withSchema = (editor: CustomEditor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry, options) => {
    const [node, path] = entry;

    if (SlateElement.isElement(node) && node.type === BlockType.Paragraph) {
      for (const [child, childPath] of SlateNode.children(editor, path)) {
        if (SlateElement.isElement(child) && !editor.isInline(child)) {
          Transforms.unwrapNodes(editor, { at: childPath });
          return;
        }
      }
    }

    normalizeNode(entry, options);
  };

  return editor;
};