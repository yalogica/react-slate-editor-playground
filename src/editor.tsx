import { useMemo, useState, useCallback } from "react"
import { createEditor, Descendant } from "slate"
import { Slate, withReact } from "slate-react"
import { withHistory } from "slate-history";
import { cn } from "@/lib/utils"
import { CustomEditor } from "@/slate-types"
import { withLinks, withEmbeds, withSchema } from "@/slate-utils"
import { EditorToolbar } from "@/editor-toolbar"
import { EditorContent } from "@/editor-content"

interface EditorLayoutProps {
  className?: string;
  editor: CustomEditor;
  value: Descendant[];
  isExpanded: boolean;
  onChange: (value: Descendant[]) => void;
  onExpand: () => void;
}

const EditorLayout = ({className, editor, value, isExpanded, onChange, onExpand}: EditorLayoutProps) => {
  return (
    <div className={className}>
      <div className="w-full h-full flex flex-col border-10 rounded-md bg-background">
        <Slate editor={editor} initialValue={value} onChange={onChange}>
          <EditorToolbar
            editor={editor}
            isExpanded={isExpanded}
            onExpand={onExpand}
          />
          <EditorContent
            editor={editor}
            isExpanded={isExpanded}
            value={value}
            onChange={onChange}
          />
        </Slate>
      </div>
    </div>
  );
}

export interface EditorProps {
  className?: string;
  content?: Descendant[];
}

export const Editor = ({ className, content = [] }: EditorProps) => {
  const editor = useMemo(() => withHistory(withSchema(withEmbeds(withLinks(withReact(createEditor()))))), []);
  const [editorContent, setEditorContent] = useState<Descendant[]>(content);
  const [isExpanded, setIsExpanded] = useState(false);
 
  const toggleExpand = useCallback(() => {
    editor.deselect();
    setIsExpanded(prev => !prev);
  }, [editor]);

  const handleOnChange = useCallback((newValue: Descendant[]) => {
    setEditorContent(newValue);
  }, []);

  return (
    <EditorLayout
      className={cn(isExpanded && "fixed inset-0 z-50 bg-black/20 flex items-center justify-center p-20", className)}
      editor={editor}
      value={editorContent}
      isExpanded={isExpanded}
      onChange={handleOnChange}
      onExpand={toggleExpand}
    />
  )
}