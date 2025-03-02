import { ApiResponse, AuthTokens, DashboardData, SignUpResponse } from '../types/api';

class AuthService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async signIn(username: string, password: string): Promise<ApiResponse<AuthTokens>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/signin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data: ApiResponse<AuthTokens> = await response.json();

      console.log("data", data)

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign in');
      }

      return data;
    } catch (error) {
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }

  async signUp(username: string, email: string, password: string): Promise<ApiResponse<SignUpResponse>> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data: ApiResponse<SignUpResponse> = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to sign up');
      }

      return data;
    } catch (error) {
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }

  async getDashboardData(token: string): Promise<ApiResponse<DashboardData>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/dashboard/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data: ApiResponse<DashboardData> = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch dashboard data');
      }

      return data;
    } catch (error) {
      throw error instanceof Error ? error : new Error('An unexpected error occurred');
    }
  }
}

export default AuthService;
