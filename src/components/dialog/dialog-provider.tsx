import { useDialogStore } from "@/components/dialog/use-dialog-store";

export const DialogProvider = () => {
  const dialogs = useDialogStore((state) => state.dialogs);

  if (dialogs.length === 0) return null;

  return (
    <>
      {dialogs.map((dialog) => (
        <div key={dialog.id}>
          {dialog.element}
        </div>
      ))}
    </>
  );
};