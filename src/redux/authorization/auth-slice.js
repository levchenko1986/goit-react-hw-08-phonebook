import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.error = null;
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.isLoading = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.isLoading = false;
    },
    [logOut.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected](state, action) {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isLoggedIn = false;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
  },
});
export default authSlice.reducer;

