import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('/api/v1/messages');
    const data = await response.json();
    console.log(data.greeting)
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },

  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export default greetingSlice.reducer;