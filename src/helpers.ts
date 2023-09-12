import axios from 'axios';
import { toast } from 'react-toastify';

export const capitalize = (text?: string) => {
  if (!text) return;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const showToast = (message: string, type: 'error' | 'success' | 'warning') => {
  toast.dismiss();
  toast[type](message);
};

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response) {
    showToast(error.response.data?.message, 'error');
  } else {
    const message = String(error);
    showToast(message, 'error');
  }
};
