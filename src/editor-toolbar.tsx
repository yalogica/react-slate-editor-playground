import { CustomEditor, BlockType, MarkType, AlignType } from "@/slate-types"
import { getActiveBlock, toggleBlock, isMarkActive, toggleMark, getActiveAlign, toggleAlign, indentListItem, outdentListItem, insertLink, removeLink, insertImage, insertEmbed, getSelectedText } from "./slate-utils"
import { cn } from "@/lib/utils"
import { Icons } from "@/lib/icons"
import { useDialogStore } from "@/components/dialog/use-dialog-store"
import { DialogEditLink } from "@/components/editor/link/dialog-edit-link"
import { DialogEditImage } from "@/components/editor/image/dialog-edit-image"
import { DialogEditEmbed } from "@/components/editor/embed/dialog-edit-embed"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

const getGeneralIcon = (blockType?: BlockType) => {
  switch(blockType) {
    case BlockType.HeadingOne: return <Icons.H1 size={16} />;
    case BlockType.HeadingTwo: return <Icons.H2 size={16} />;
    case BlockType.HeadingThree: return <Icons.H3 size={16} />;
    case BlockType.HeadingFour: return <Icons.H4 size={16} />;
    case BlockType.HeadingFive: return <Icons.H5 size={16} />;
    case BlockType.HeadingSix: return <Icons.H6 size={16} />;
    case BlockType.BlockQuote: return <Icons.BlockQuote size={16} />;
  }
  return <Icons.Paragraph size={16} />;
}

const getAlignIcon = (alignType: AlignType | null) => {
  switch(alignType) {
    case AlignType.Left: return <Icons.AlignLeft size={16} />;
    case AlignType.Center: return <Icons.AlignCenter size={16} />;
    case AlignType.Right: return <Icons.AlignRight size={16} />;
    case AlignType.Justify: return <Icons.AlignJustify size={16} />;
  }
  return <Icons.AlignLeft size={16} />;
}

const getListIcon = (blockType?: BlockType) => {
  switch(blockType) {
    case BlockType.BulletedList: return <Icons.BulletedList size={16} />;
    case BlockType.NumberedList: return <Icons.NumberedList size={16} />;
  }

  return <Icons.BulletedList size={16} />;
}

interface EditorToolbarProps {
  editor: CustomEditor;
  isExpanded: boolean;
  onExpand: () => void;
}

export const EditorToolbar = ({ editor, isExpanded, onExpand }: EditorToolbarProps) => {
  const { showDialog } = useDialogStore();

  const activeBlock = getActiveBlock(editor);
  const activeBlockLowest = getActiveBlock(editor, "lowest");
  const activeAlign = getActiveAlign(editor);

  const handleGeneralAction = (blockType: BlockType) => {
    toggleBlock(editor, blockType);
  }

  const handleAlignAction = (alignType: AlignType) => {
    toggleAlign(editor, alignType);
  }

  const handleListAction = (action: BlockType | "IncreaseIndent" | "DecreaseIndent") => {
    switch(action) {
      case BlockType.BulletedList: toggleBlock(editor, BlockType.BulletedList); break;
      case BlockType.NumberedList: toggleBlock(editor, BlockType.NumberedList); break;
      case "IncreaseIndent": indentListItem(editor); break;
      case "DecreaseIndent": outdentListItem(editor); break; 
    }
  }

  const handleEditLink = () => {
    if (activeBlockLowest?.type === BlockType.Link) {
      removeLink(editor);
    } else {
      showDialog(<DialogEditLink text={getSelectedText(editor)} onSubmit={(newLinkElement) => { insertLink(editor, newLinkElement); }} />);
    }
  }

  const handleEditImage = () => {
    showDialog(<DialogEditImage onSubmit={(newImageElement) => { insertImage(editor, newImageElement); }} />);
  }

  const handleEditEmbed = () => {
    showDialog(<DialogEditEmbed onSubmit={(newEmbedElement) => { insertEmbed(editor, newEmbedElement); }} />);
  }

  return (
    <div className="p-1 flex flex-wrap gap-1 items-center border-b">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            { getGeneralIcon(activeBlock?.type) }
            <Icons.ChevronDown size={12} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.Paragraph)}>
            <Icons.Paragraph size={16} /><span>Text</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingOne)}>
            <Icons.H1 size={16} /><span>Heading 1</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingTwo)}>
            <Icons.H2 size={16} /><span>Heading 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingThree)}>
            <Icons.H3 size={16} /><span>Heading 3</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingFour)}>
            <Icons.H4 size={16} /><span>Heading 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingFive)}>
            <Icons.H5 size={16} /><span>Heading 5</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.HeadingSix)}>
            <Icons.H6 size={16} /><span>Heading 6</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleGeneralAction(BlockType.BlockQuote)}>
            <Icons.BlockQuote size={16} /><span>BlockQuote</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Separator  orientation="vertical" />

      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(isMarkActive(editor, MarkType.Bold) && "bg-primary text-primary-foreground")}
        onClick={() => toggleMark(editor, MarkType.Bold)}
      >
        <Icons.Bold size={16} />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(isMarkActive(editor, MarkType.Italic) && "bg-primary text-primary-foreground")}
        onClick={() => toggleMark(editor, MarkType.Italic)}
      >
        <Icons.Italic size={16} />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(isMarkActive(editor, MarkType.Underline) && "bg-primary text-primary-foreground")}
        onClick={() => toggleMark(editor, MarkType.Underline)}
      >
        <Icons.Underline size={16} />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(isMarkActive(editor, MarkType.Strikethrough) && "bg-primary text-primary-foreground")}
        onClick={() => toggleMark(editor, MarkType.Strikethrough)}
      >
        <Icons.Strikethrough size={16} />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(isMarkActive(editor, MarkType.Code) && "bg-primary text-primary-foreground")} 
        onClick={() => toggleMark(editor, MarkType.Code)}
      >
        <Icons.Code size={16} />
      </Button>

      <Separator  orientation="vertical" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            { getAlignIcon(activeAlign) }
            <Icons.ChevronDown size={12} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => handleAlignAction(AlignType.Left)}>
            <Icons.AlignLeft size={16} /><span>Align left</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleAlignAction(AlignType.Center)}>
            <Icons.AlignCenter size={16} /><span>Align center</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleAlignAction(AlignType.Right)}>
            <Icons.AlignRight size={16} /><span>Align right</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleAlignAction(AlignType.Justify)}>
            <Icons.AlignJustify size={16} /><span>Align justify</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            { getListIcon(activeBlock?.type) }
            <Icons.ChevronDown size={12} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => handleListAction(BlockType.BulletedList)}>
            <Icons.BulletedList size={16} /><span>Bulleted list</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleListAction(BlockType.NumberedList)}>
            <Icons.NumberedList size={16} /><span>Numbered list</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleListAction("IncreaseIndent")}>
            <Icons.IncreaseIndent size={16} /><span>Increase indent</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleListAction("DecreaseIndent")}>
            <Icons.DecreaseIndent size={16} /><span>Decrease indent</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Separator  orientation="vertical" />

      <Button variant="ghost" size="sm" onClick={handleEditLink}>
        { activeBlockLowest?.type === BlockType.Link ? <Icons.Unlink size={16} /> : <Icons.Link size={16} /> }
      </Button>
      <Button variant="ghost" size="sm" onClick={handleEditImage}>
        <Icons.ImagePlus size={16} />
      </Button>
      <Button variant="ghost" size="sm" onClick={handleEditEmbed}>
        <Icons.EmbedPlus size={16} />
      </Button>

      <Separator  orientation="vertical" />

      <Button variant="ghost" size="sm" onClick={onExpand}>
        { isExpanded ? <Icons.Minimize size={16} /> : <Icons.Maximize size={16} /> }
      </Button>
    </div>
  )
};