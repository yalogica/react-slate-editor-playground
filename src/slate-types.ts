import type { BaseEditor, BaseText } from "slate";
import type { ReactEditor } from "slate-react";
import type { HistoryEditor } from "slate-history";

export enum BlockType {
  Paragraph = "paragraph",
  HeadingOne = "heading-one",
  HeadingTwo = "heading-two",
  HeadingThree = "heading-three",
  HeadingFour = "heading-four",
  HeadingFive = "heading-five",
  HeadingSix = "heading-six",
  BlockQuote = "blockquote",
  BulletedList = "bulleted-list",
  NumberedList = "numbered-list",
  ListItem = "list-item",
  Link = "link",
  Image = "image",
  Embed = "embed"
}

export enum MarkType {
  Bold = "bold",
  Italic = "italic",
  Underline = "underline",
  Strikethrough = "strikethrough",
  Code = "code"
}

export enum AlignType {
  Left = "left", 
  Center = "center", 
  Right = "right", 
  Justify = "justify"
}

export enum FloatType {
  None = "none", 
  Left = "left", 
  Right = "right"
}

export interface ParagraphElement {
  type: BlockType.Paragraph;
  align?: AlignType;
  children: CustomNode[];
}

export interface HeadingElement {
  type: BlockType.HeadingOne | BlockType.HeadingTwo | BlockType.HeadingThree | BlockType.HeadingFour | BlockType.HeadingFive | BlockType.HeadingSix
  align?: AlignType;
  children: CustomNode[];
}

export interface BlockQuoteElement {
  type: BlockType.BlockQuote;
  align?: AlignType;
  children: CustomNode[];
}

export interface BulletedListElement {
  type: BlockType.BulletedList;
  align?: AlignType;
  children: ListItemElement[];
}

export interface NumberedListElement {
  type: BlockType.NumberedList;
  align?: AlignType;
  children: ListItemElement[];
}

export interface ListItemElement {
  type: BlockType.ListItem;
  children: CustomNode[];
}

export interface LinkElement {
  type: BlockType.Link;
  url: string;
  title?: string;
  target?: "_blank" | "_self";
  children: CustomText[];
}

export interface ImageElement {
  type: BlockType.Image;
  url: string;
  alt?: string;
  width?: string;
  float?: FloatType;
  align?: AlignType;
  children: CustomText[];
}

export interface EmbedElement {
  type: BlockType.Embed;
  url: string;
  width?: string;
  height?: string;
  float?: FloatType;
  align?: AlignType;
  children: CustomText[];
}

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | BlockQuoteElement
  | BulletedListElement
  | NumberedListElement
  | ListItemElement
  | LinkElement
  | ImageElement
  | EmbedElement

export type CustomNode = CustomElement | CustomText;

export type CustomDescendant = CustomNode;

export interface CustomText extends BaseText {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  superscript?: boolean;
  subscript?: boolean;
  code?: boolean;
  color?: string;
  backgroundColor?: string;
}

export type EmptyText = { 
  text: string; 
}

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;