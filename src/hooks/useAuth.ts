import { useReducer, useCallback } from 'react';
import Cookies from 'js-cookie';
import { successToast, errorToast } from '../components/Toasts';
import AuthService from '../services/authService';
import { AuthState, AuthAction, Navigation } from '../types';

const authService = new AuthService("https://authflow-tw70.onrender.com");

const initialState: AuthState = {
  isAuthenticated: !!Cookies.get('access_token'),
  isLoading: false,
  user: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case 'SIGNIN_SUCCESS':
      return { ...state, isAuthenticated: true };
    case 'SIGNOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const useAuth = ({ navigation }: { navigation: Navigation }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = useCallback(async (username: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await authService.signIn(username, password);

      if (response.data) {
        Cookies.set('access_token', response.data.access_token, { expires: 7 });
        Cookies.set('refresh_token', response.data.refresh_token, { expires: 7 });
        dispatch({ type: 'SIGNIN_SUCCESS' });
        successToast(response.message);
        navigation.navigate?.('/');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      errorToast(message);
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [navigation]);

  const signUp = useCallback(async (username: string, email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await authService.signUp(username, email, password);

      if (response.data) {
        successToast(response.message);
        navigation.navigate?.('/signin');
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      errorToast(message);
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [navigation]);

  const signOut = useCallback(() => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    dispatch({ type: 'SIGNOUT' });
    successToast('Signed out successfully');
    navigation.navigate?.('/signin');

  }, [navigation]);

  return {
    ...state,
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;
