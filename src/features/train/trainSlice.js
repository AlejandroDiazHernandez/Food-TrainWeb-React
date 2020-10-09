import { createSlice } from "@reduxjs/toolkit";

export const trainSliceName = "train";
const trainSlice = createSlice({
  name: trainSliceName,
  initialState: {
    exercice: [],
  },
  reducers: {
    doAddTrain: (state, action) => {
      if (state.exercice !== true) {
        state.exercice = [...state.exercice, action.payload];
      } else {
        state.exercice = action.payload;
      }
    },
  },
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doAddTrain } = trainSlice.actions;

export const selectExercice = (state) => state[trainSliceName].exercice;

export default trainSlice.reducer;
