import { useMemo } from 'react';
import {useAppDispatch} from '../redux';
import * as toast from '../redux/toastSlice';

export default function useToast() {
  const dispatch = useAppDispatch();
  const openToast = (severity: 'error' | 'warning' | 'info' | 'success', messages: string) => {
    dispatch(toast.openToast({
      severity,
      messages,
    }));
  };
  
  return useMemo(() => ({
    openToast
  }), []);
}
