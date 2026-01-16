import { useState } from "react"
import { BlockType, EmbedElement, FloatType } from "@/slate-types"
import { useDialogStore } from "@/components/dialog/use-dialog-store"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"

interface DialogEditEmbedProps {
  embedElement?: EmbedElement;
  text?: string;
  onSubmit: (imageElement: EmbedElement) => void;
}

export const DialogEditEmbed = ({ embedElement, onSubmit }: DialogEditEmbedProps) => {
  const { closeDialog } = useDialogStore();

  const [embedUrl, setEmbedUrl] = useState<string>(embedElement?.url ?? "");
  const [embedWidth, setEmbedWidth] = useState<string>(embedElement?.width ?? "");
  const [embedHeight, setEmbedHeight] = useState<string>(embedElement?.height ?? "");
  const [embedFloat, setEmbedFloat] = useState<FloatType>(embedElement?.float ?? FloatType.None);

  const handleSubmit = () => {
    if (!embedUrl?.trim()) return;
    
     onSubmit({
      type: BlockType.Embed,
      url: embedUrl,
      width: embedWidth,
      height: embedHeight,
      float: embedFloat,
      children: [{ text: "" }]
    });

    closeDialog();
  }

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> 
            { embedElement ? "Edit Embed Block" : "New Embed Block" }
          </DialogTitle>
          <DialogDescription className="sr-only">
            Insert or edit embed block
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="embedUrl">Embed Url</Label>
            <Input 
              id="embedUrl" 
              placeholder="Paste an embeddable link (YouTube, Vimeo, Twitter, etc.)"
              value={embedUrl}
              onChange={(e) => setEmbedUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="embedWidth">Width</Label>
            <Input 
              id="embedWidth" 
              placeholder="100%"
              value={embedWidth}
              onChange={(e) => setEmbedWidth(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Set as pixels (e.g. 300px, 100px) or percentage (e.g. 100%, 50%)
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="embedHeight">Height</Label>
            <Input 
              id="embedHeight" 
              placeholder="auto"
              value={embedHeight}
              onChange={(e) => setEmbedHeight(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Set as pixels (e.g. 300px, 100px) or CSS valid units, leave empty for auto
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Text wrap</Label>
            <RadioGroup 
              value={embedFloat} 
              onValueChange={(val) => setEmbedFloat(val as FloatType)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={FloatType.None} id="floatNone" />
                <Label htmlFor="floatNone" className="font-normal">None</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={FloatType.Left} id="floatLeft" />
                <Label htmlFor="floatLeft" className="font-normal">Left</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={FloatType.Right} id="floatRight" />
                <Label htmlFor="floatRight" className="font-normal">Right</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={closeDialog}>
            Close
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}