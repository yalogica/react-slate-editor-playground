import { useState } from "react";
import { Node as SlateNode } from "slate";
import type { ImageElement } from "@/slate-types";
import { BlockType, FloatType } from "@/slate-types";
import { useDialogStore } from "@/components/dialog/use-dialog-store";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

interface DialogEditImageProps {
  imageElement?: ImageElement;
  text?: string;
  onSubmit: (imageElement: ImageElement) => void;
}

export const DialogEditImage = ({ imageElement, onSubmit }: DialogEditImageProps) => {
  const { closeDialog } = useDialogStore();

  const [imageUrl, setImageUrl] = useState<string>(imageElement?.url ?? "");
  const [imageAlt, setImageAlt] = useState<string>(imageElement?.alt ?? "");
  const [imageWidth, setImageWidth] = useState<string>(imageElement?.width ?? "");
  const [imageFloat, setImageFloat] = useState<FloatType>(imageElement?.float ?? FloatType.None);

  const handleSubmit = () => {
    if (!imageUrl?.trim()) return;
    
    onSubmit({
      type: BlockType.Image,
      url: imageUrl,
      alt: imageAlt,
      width: imageWidth,
      float: imageFloat,
      children: [{ text: "" }],
    });

    closeDialog();
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> 
            { imageElement ? "Edit Image" : "New Image" }
          </DialogTitle>
          <DialogDescription className="sr-only">
            Insert or edit image block
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="imageUrl">Image Url</Label>
            <Input 
              id="imageUrl" 
              placeholder="Paste image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="imageAlt">Alternative description</Label>
            <Input 
              id="imageAlt" 
              placeholder="Describe the image"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="imageWidth">Width</Label>
            <Input 
              id="imageWidth" 
              placeholder="100%"
              value={imageWidth}
              onChange={(e) => setImageWidth(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Set as pixels (e.g. 300px, 100px) or percentage (e.g. 100%, 50%)
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Text wrap</Label>
            <RadioGroup 
              value={imageFloat} 
              onValueChange={(val) => setImageFloat(val as FloatType)}
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
  );
};