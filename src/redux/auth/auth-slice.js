import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './auth-operations';
import {
  pendingCallback,
  errorCallback,
  fulfilledCallback,
} from '../../shared/helpers/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  isLoadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: pendingCallback,
    [signup.fulfilled]: fulfilledCallback,
    [signup.rejected]: errorCallback,
    [login.pending]: pendingCallback,
    [login.fulfilled]: fulfilledCallback,
    [login.rejected]: errorCallback,
    [logout.pending]: pendingCallback,
    [logout.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logout.rejected]: errorCallback,
    [current.pending]: store => {
      store.isLoadingUser = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.user = payload.user;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.isLoadingUser = false;
      store.error = payload;
    },
  },
});
export default authSlice.reducer;
