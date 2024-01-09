import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    selectedImageId: null,
  },
  reducers: {
    setAndOpenImage: (state, action) => {
      state.selectedImageId = action.payload;
    },
    closeImage: (state) => {
      state.selectedImageId = null;
    },
  },
});

export const { setAndOpenImage, closeImage } = imageSlice.actions;
export const selectImageId = (state) => state.image.selectedImageId;
export default imageSlice.reducer;