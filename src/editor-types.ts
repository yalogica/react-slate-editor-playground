import { MarkType } from "@/slate-types";

export const EDITOR_STYLES = `
  [contenteditable="true"] {
    outline: none;
    border: none;
    box-shadow: none;
    -webkit-user-modify: read-write;
  }
  body {
    margin: 0;
    padding: 10px;
    line-height: 1.2;
    overflow-y: auto;
    overflow-x: hidden;
  }
  span {
    white-space: pre-wrap;
  }
  h1, h2, h3,
  h4, h5, h6 {
    margin: 1em 0 0.5em 0;
    line-height: 1.2;
  }
  code {
    font-family: monospace;
    background: #f5f5f5;
    padding: 2px 4px;
    border-radius: 3px;
  }
  blockquote {
    border-left: 2px solid #555;
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    color: #555;
  }
  ul, ol {
    margin-left: 0;
    padding-left: 0;
    list-style-position: inside;
  }
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    padding-left: 1em;
  }
  a {
    display: inline-block;
    color: #2271b1;
  }
  a:hover {
    outline: none;
  }
  img {
    display: inline-block;
    width: 100%;
    border-radius: 5px;
  }
  img.selected,
  img:hover {
    box-shadow: 0 0 0 2px #2271b1;
    border-radius: 5px;
  }
  iframe {
    border: none;
  }
  iframe.selected,
  iframe:hover {
    box-shadow: 0 0 0 2px #2271b1;
    border-radius: 5px;
  }
  .image-container,
  .embed-container {
    display: inline-block;
    position: relative;
  }
  .popover {
    transition: opacity .2s ease;
    pointer-event: none;
    opacity: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .popover.visible {
    pointer-event: auto;
    opacity: 1;
  }
  button {
    padding: 3px;
    background: transparent;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #e6e6e6;
  }
  button.active {
    color: #fff;
    background: #2271b1;
  }
  .divider {
    width: 1px;
    height: 16px;
    background: #777;
  }
`;

export const HOTKEYS: Record<string, MarkType> = {
  "mod+b": MarkType.Bold,
  "mod+i": MarkType.Italic,
  "mod+u": MarkType.Underline,
  "mod+`": MarkType.Code,
};