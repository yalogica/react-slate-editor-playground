import { Descendant } from "slate"
import { BlockType, AlignType } from "@/slate-types"
import { Editor } from "@/editor"
import { DialogProvider } from "@/components/dialog/dialog-provider"

const initialContent: Descendant[] = [
  {
    type: BlockType.HeadingOne,
    align: AlignType.Center,
    children: [
      { text: 'This is header' },
    ]
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: BlockType.Paragraph,
    children: [
      { text: "Since it's rich text, you can do things like turn a selection of text " },
      { text: 'bold', bold: true },
      { text: ', or add a semantically rendered block quote in the middle of the page, like this:' },
    ],
  },
  {
    type: BlockType.BlockQuote,
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: BlockType.Paragraph,
    align: AlignType.Center,
    children: [
      { 
        text: 'Try it out for ' 
      },
      {
        type: BlockType.Link,
        url: 'https://google.com',
        children: [{ text: 'youself' }]
      },
      { 
        text: '!' 
      }
    ],
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