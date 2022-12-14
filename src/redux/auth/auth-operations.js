import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logot',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);
export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue();
      }
      const result = await api.getCurrentUser(auth.token);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.message,
      };
      rejectWithValue(error);
    }
  }
);
