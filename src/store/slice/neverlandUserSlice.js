import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncHome, fetchAsyncLogin, fetchAsyncLogout, fetchAsyncOverview,
} from './aysncThunkActions';

const initialState = {
  userData: {},
  isLoaded: false,
  homePageData: {},
  book: {},
};

const neverlandUserSlice = createSlice({
  name: 'neverlandUser',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.userData = payload;
    },
    deleteUser: (state) => {
      return {
        ...state,
        userData: {},
        isLoaded: false,
        homePageData: {},
        book: {},
      }
    },
    addHomepageData: (state, {payload}) => {
      return { ...state, homePageData: payload }
    },
    addBookData: (state, {payload}) => {
      return { ...state, book: payload }
    },
  },
  extraReducers: {
    [fetchAsyncHome.pending]: (state, { payload }) => {
      state.isLoaded = false;
    },
    [fetchAsyncHome.rejected]: (state, { payload }) => {
    },
    [fetchAsyncHome.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        homePageData: payload,
        isLoaded: true,
      }
    },
    [fetchAsyncOverview.fulfilled]: (state, { payload }) => {
    },
    [fetchAsyncLogout.fulfilled]: (state, { payload }) => {
    },
    [fetchAsyncLogin.fulfilled]: (state, { payload }) => {
      return { ...state, userData: payload }
    },
  },
});

export const {
  addUser, deleteUser, addHomepageData, addBookData,
} = neverlandUserSlice.actions;
export const getUserData = (state) => state.neverlandUser.userData;
export const getHomePageData = (state) => state.neverlandUser.homePageData;
export const getBook = (state) => state.neverlandUser.book;
export const getLoader = (state) => state.neverlandUserSlice.isLoaded;
export default neverlandUserSlice.reducer;
