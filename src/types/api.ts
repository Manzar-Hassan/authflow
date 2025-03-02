export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
  detail?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  user: {
    username: string;
    email: string;
  };
}

export interface SignUpResponse {
  username: string;
  email: string;
}

export interface DashboardData {
  user: {
    username: string;
    email: string;
  };
  last_login: string;
  date_joined: string;
}