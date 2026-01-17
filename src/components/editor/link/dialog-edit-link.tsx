import { useState } from "react";
import { Node as SlateNode } from "slate";
import type { LinkElement } from "@/slate-types";
import { BlockType } from "@/slate-types";
import { useDialogStore } from "@/components/dialog/use-dialog-store";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

interface DialogEditLinkProps {
  linkElement?: LinkElement;
  text?: string;
  onSubmit: (linkElement: LinkElement) => void;
}

export const DialogEditLink = ({ linkElement, text, onSubmit }: DialogEditLinkProps) => {
  const { closeDialog } = useDialogStore();

  const [linkUrl, setLinkUrl] = useState<string>(linkElement?.url ?? "");
  const [linkText, setLinkText] = useState<string>(linkElement ? SlateNode.string(linkElement) : (text ?? ""));
  const [linkTitle, setLinkTitle] = useState<string>(linkElement?.title ?? "");
  const [linkTarget, setLinkTarget] = useState<string>(linkElement?.target ?? "_self");

  const handleSubmit = () => {
    if (!linkUrl?.trim()) return;
    
    onSubmit({
      type: BlockType.Link,
      url: linkUrl,
      title: linkTitle,
      target: (linkTarget as "_blank" | "_self") || "_self",
      children: [{ text: linkText || linkUrl }],
    });

    closeDialog();
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> 
            { linkElement ? "Edit Link" : "New Link" }
          </DialogTitle>
          <DialogDescription className="sr-only">
            Enter the URL and display text for the link.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="linkUrl">Url</Label>
            <Input 
              id="linkUrl" 
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="linkText">Text to display</Label>
            <Input 
              id="linkText" 
              placeholder="Enter link text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              If empty, will use URL or selected text as display text
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="linkTitle">Title</Label>
            <Input 
              id="linkTitle" 
              placeholder="Link title (tooltip)" 
              value={linkTitle}
              onChange={(e) => setLinkTitle(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
                Appears as a tooltip when hovering over the link
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label>Open link in</Label>
            <RadioGroup 
              value={linkTarget} 
              onValueChange={setLinkTarget}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="_self" id="self" />
                <Label htmlFor="self" className="font-normal">Current tab</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="_blank" id="blank" />
                <Label htmlFor="blank" className="font-normal">New tab</Label>
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