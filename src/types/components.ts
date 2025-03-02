import { ReactNode } from 'react';
import { AuthResponse } from './auth';

export interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

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