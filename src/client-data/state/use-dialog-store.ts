import create from 'zustand';

type UseDialogStore = {
  dialog: boolean;
  setDialog: (dialog: boolean) => void;
  submitting: boolean;
  setSubmitting: (submitting: boolean) => void;
};

export const useDialogStore = create<UseDialogStore>((set) => ({
  dialog: false,
  setDialog: (dialog: boolean) => set({ dialog, submitting: false }),
  submitting: false,
  setSubmitting: (submitting: boolean) => set({ submitting }),
}));
