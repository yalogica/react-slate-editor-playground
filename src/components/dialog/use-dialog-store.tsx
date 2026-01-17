import { create } from "zustand";
import { produce } from "immer";
import { generateId } from "@/lib/utils";

type DialogItem = {
  id: string;
  element: React.ReactElement;
}

interface DialogState {
  dialogs: DialogItem[];
  showDialog: (dialog: React.ReactElement) => void;
  closeDialog: () => void;
  closeAllDialogs: () => void;
  closeDialogById: (id: string) => void;
}

export const useDialogStore = create<DialogState>((set, get) => {
  return {
    dialogs: [],

    showDialog: (dialog) => {
      set((state) =>
        produce(state, (draft) => {
          draft.dialogs.push({ id: generateId(), element: dialog });
        }),
      );
    },

    closeDialog: () => {
      set((state) =>
        produce(state, (draft) => {
          draft.dialogs.pop();
        }),
      );
    },

    closeAllDialogs: () => {
      set((state) =>
        produce(state, (draft) => {
          draft.dialogs = [];
        }),
      );
    },

    closeDialogById: (id: string) => {
      set((state) =>
        produce(state, (draft) => {
          draft.dialogs = draft.dialogs.filter((dialog) => dialog.id !== id);
        }),
      );
    },
  };
});