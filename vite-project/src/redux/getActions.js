import { createAsyncThunk } from '@reduxjs/toolkit';
import { myApi } from '../Api/myApi';

export const fetchMyData = createAsyncThunk(
  'mySlice/fetchMyCarstaDa',
  async () => {
    const response = await myApi.getMyData();
    console.log(response);
    return response;
  }
);