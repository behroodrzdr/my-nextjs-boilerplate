import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TSeverity = 'error' | 'warning' | 'info' | 'success';
type toastState = {
  open: boolean;
  severity: TSeverity;
  messages: string;
  hasButton?: boolean;
  autoHideDuration?: number;
};

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    open: false,
    severity: 'success',
    autoHideDuration: 4000,
    hasButton: false,
  } as toastState,
  reducers: {
    openToast: (
      state,
      {
        payload: { severity, messages, autoHideDuration, hasButton },
      }: PayloadAction<Omit<toastState, 'open'>>,
    ) => {
      state.severity = severity;
      state.messages = messages;
      state.hasButton = hasButton;
      state.open = true;
      if (autoHideDuration) state.autoHideDuration = autoHideDuration;
    },
    closeToast: state => {
      state.open = false;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
