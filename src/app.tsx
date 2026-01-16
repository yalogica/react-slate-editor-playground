import { Descendant } from "slate"
import { BlockType, AlignType, FloatType } from "@/slate-types"
import { Editor } from "@/editor"
import { DialogProvider } from "@/components/dialog/dialog-provider"

const initialContent: Descendant[] = [
  {
    type: BlockType.HeadingOne,
    align: AlignType.Center,
    children: [
      { text: "This is header" },
    ]
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: "Since it's rich text, you can do things like turn a selection of text " },
      { text: "bold", bold: true },
      { text: ", or add a semantically rendered block quote in the middle of the page, like this:" },
    ],
  },
  {
    type: BlockType.BlockQuote,
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: BlockType.HeadingThree,
    children: [
      { text: "Interactive Elements" },
    ]
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: "You can also embed " },
      { 
        type: BlockType.Link,
        url: "https://github.com/yalogica/react-slate-editor-playground",
        children: [{text: "hyperlinks"}] 
      },
      { text: " to navigate across the web." },
    ]
  },
  {
    type: BlockType.HeadingThree,
    children: [
      { text: "Structured Data" },
    ]
  },
  {
    type: BlockType.Paragraph,
    children: [{ text: "Render numbered list block, like this:" }],
  },
  {
    type: BlockType.NumberedList,
    children: [
      {
        type: BlockType.ListItem,
        children: [{ text: "List Item 1" }],
      },
      {
        type: BlockType.ListItem,
        children: [
          { text: "List Item 2" }, 
          {
            type: BlockType.NumberedList,
            children: [
              {
                type: BlockType.ListItem,
                children: [{ text: "List Subitem 1" }],
              },
              {
                type: BlockType.ListItem,
                children: [{ text: "List Subitem 2" }],
              },
            ]
          }
        ],
      },
      {
        type: BlockType.ListItem,
        children: [{ text: "List Item 3" }],
      }
    ]
  },
  {
    type: BlockType.Image,
    url: "https://yalogica.github.io/store/editor/butterfly.jpg",
    width: "50%",
    float: FloatType.Left,
    children: [{ text: "" }]
  },
  {
    type: BlockType.HeadingThree,
    children: [
      { text: "Media & Text Wrap" },
    ]
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: "One of the most powerful features is image support with text wrapping. " },
      { text: "This paragraph demonstrates how text flows around an image when the 'Float' property is set to 'Left'. Notice how the words wrap smoothly around the container, allowing for magazine-style layouts right inside your editor." },
      { text: "" },
      { text: "" },
    ]
  },
  {
    type: BlockType.Paragraph,
    align: AlignType.Center,
    children: [{ text: 'Try it out for yourself!', bold: true, underline: true }],
  },
]

export const App = () => {
  return (
    <>
      <Editor className="h-full w-full" content={initialContent} />
      <DialogProvider />
    </>
  )
}