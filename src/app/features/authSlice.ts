import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAdmin } from '../../interfaces';
import Cookies from 'js-cookie'

export interface AuthState {
  token: string | null;
  admin: IAdmin | null;
}

const initialState: AuthState = {
  token: null,
  admin: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.admin = action.payload.admin;
      Cookies.set('token', action.payload.token || '');
      Cookies.set('doctor', JSON.stringify(action.payload.admin) || '');
    },
    logoutReducer: (state) => {
      state.token = null;
      state.admin = null;
      Cookies.remove('token');
      Cookies.remove('admin');
    },
  },
})

export const { loginReducer, logoutReducer } = authSlice.actions;

export default authSlice.reducer;