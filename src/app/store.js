import { configureStore } from "@reduxjs/toolkit";

import loginReducer, {
  loginSliceName,
} from "../features/login/loginSlice";

import nutritionReducer, {
  nutritionSliceName,
} from "../features/nutrition/nutritionSlice";

import trainReducer, {
  trainSliceName,
} from "../features/train/trainSlice";

import userViewReducer, {
  userViewSliceName,
} from "../features/userview/userViewSlice";

import registerReducer, {
  registerSliceName,
} from "../features/register/registerSlice";

import calculatorReducer, {
  calculatorSliceName,
} from "../features/calculator/calculatorSlice";



export default configureStore({
  reducer: {
    [loginSliceName]: loginReducer,
    [registerSliceName]: registerReducer,
    [nutritionSliceName]: nutritionReducer,
    [trainSliceName]: trainReducer,
    [userViewSliceName]: userViewReducer,
    [calculatorSliceName]: calculatorReducer,
  },
});
