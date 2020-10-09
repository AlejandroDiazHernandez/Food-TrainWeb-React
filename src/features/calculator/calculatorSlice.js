import { createSlice } from "@reduxjs/toolkit";

export const calculatorSliceName = "calculator";

const calculatorSlice = createSlice({
  name: calculatorSliceName,

  initialState: {
    gender: "male" || "female",
    weight: "",
    height: "",
    age: "",
    activitylevel: "",
    maintenanceCalories: "",
    result: [],
  },

  reducers: {
    doCreateValues: (state, action) => {
      console.log(action.payload.formValues.gender);
      if (action.payload.formValues.gender === "male") {
        //English-BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
        //Metric-BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
        state.weight = 10 * Number(action.payload.formValues.weight);
        state.height = 6.25 * Number(action.payload.formValues.height);
        state.age = 5 * Number(action.payload.formValues.age);
        state.result = state.weight + state.height - state.age + 5;
        state.activitylevel = action.payload.formValues.activitylevel;
      } else if (action.payload.formValues.gender === "female") {
        //English-Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years)
        //Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
        state.weight = 9.5 * Number(action.payload.formValues.weight);
        state.height = 1.8 * Number(action.payload.formValues.height);
        state.age = 4.6 * Number(action.payload.formValues.height);
        state.result = state.weight + state.height - state.age + 665;
        state.activitylevel = action.payload.formValues.activitylevel;
      }

      if (state.activitylevel === "low") {
        state.maintenanceCalories = state.result * 1.2;
      }

      if (state.activitylevel === "lowMedium") {
        state.maintenanceCalories = state.result * 1.375;
      }

      if (state.activitylevel === "medium") {
        state.maintenanceCalories = state.result * 1.55;
      }

      if (state.activitylevel === "mediumHigh") {
        state.maintenanceCalories = state.result * 1.725;
      }
    },
  },
});
export const { doCreateValues } = calculatorSlice.actions;

export const selectWeight = (state) => state[calculatorSliceName].weight;
export const selectHeight = (state) => state[calculatorSliceName].height;
export const selectAge = (state) => state[calculatorSliceName].age;
export const selectResult = (state) => state[calculatorSliceName].result;
export const selectGender = (state) => state[calculatorSliceName].gender;
export const selectActivitylevel = (state) =>
  state[calculatorSliceName].activitylevel;
export const selectMaintenanceCalories = (state) =>
  state[calculatorSliceName].maintenanceCalories;

export default calculatorSlice.reducer;
