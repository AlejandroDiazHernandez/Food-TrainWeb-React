import { createSlice } from "@reduxjs/toolkit";

import dietInfo from "../../diet.json";

export const nutritionSliceName = "nutrition";
const nutritionSlice = createSlice({
  name: nutritionSliceName,
  initialState: {
    diet: dietInfo,
    recipe: [],
    totalCal: 0,
  },

  reducers: {
    doSendrecipe: (state, action) => {
      const recipe = action.payload;

      state.recipe.push(recipe);
      state.totalCal += recipe.cal;
    },
  },
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doSendrecipe } = nutritionSlice.actions;

export const selecttotalCal = (state) => state[nutritionSliceName].totalCal;
export const selectDiet = (state) => state[nutritionSliceName].diet;
export const selectRecipe = (state) => state[nutritionSliceName].recipe;

export default nutritionSlice.reducer;
