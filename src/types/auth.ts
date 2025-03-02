export interface AuthUser {
  id?: string | number;
  email?: string;
  name?: string;
  [key: string]: any;
}

export interface AuthResponse {
  user?: AuthUser;
  token?: string;
  error?: string;
  success?: boolean;
  message?: string;
}

export interface AuthConfig {
  apiUrl?: string;
  routes?: {
    signin?: string;
    signup?: string;
    signout?: string;
  };
  tokenKey?: string;
}

// Add these new type definitions
export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
}

export interface AuthAction {
  type: 'SET_LOADING' | 'SIGNIN_SUCCESS' | 'SIGNOUT';
  payload?: any;
}

export interface Navigation {
  navigate?: (path: string) => void;
}

export interface AuthResult {
  status: 'success' | 'error';
  message?: string;
}
