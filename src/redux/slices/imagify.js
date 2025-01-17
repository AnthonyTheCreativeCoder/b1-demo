import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedImageId: null,
  selectedImage: null,
};

const imagifySlice = createSlice({
  name: 'imagify',
  initialState,
  reducers: {
    setImageState: (state, action) => {
      state.selectedImageId = action.payload.selectedImageId;
      state.selectedImage = action.payload.selectedImage;
    },
    clearImageState: (state) => {
      state.selectedImageId = null;
      state.selectedImage = null;
    },
  },
});

export const { setImageState, clearImageState } = imagifySlice.actions;
export default imagifySlice.reducer;
