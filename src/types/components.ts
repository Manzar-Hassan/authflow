import { AuthResponse } from './auth';

export interface SignInProps {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: any) => void;
  className?: string;
}

export interface SignUpProps {
  onSuccess?: (response: AuthResponse) => void;
  onError?: (error: any) => void;
  className?: string;
}

export interface CustomToastProps {
  message: string;
  type?: 'success' | 'error';
}