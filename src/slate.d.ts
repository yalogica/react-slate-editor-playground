import type { CustomEditor, CustomElement, CustomText } from "@/slate-types";

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}