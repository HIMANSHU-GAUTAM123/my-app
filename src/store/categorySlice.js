import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    selectedImageId: null,
    selectedSource: null,
    back:null,
  },
  reducers: {
    setAndOpenImage: (state, action) => {
      state.selectedImageId = action.payload;
    },
    setAndOpenSource: (state, action) => {
      state.selectedSource = action.payload;
    },
    setBack: (state, action) => {
      state.back = action.payload;
    },
    
    closeImage: (state) => {
      state.selectedImageId = null;
    },
  },
});

export const { setAndOpenImage, closeImage, setAndOpenSource,setBack } = imageSlice.actions;
export const selectImageId = (state) => state.image.selectedImageId;
export const selectedSource = (state) => state.image.selectedSource;
export const back = (state) => state.image.back;

export default imageSlice.reducer;