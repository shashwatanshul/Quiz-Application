import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  editPizzaReducer,
} from "./reducers/pizzaReducers";
import {
  getAllQuizsReducer,
  addQuizReducer,
  getQuizByIdReducer,
  editQuizReducer,
} from "./reducers/quizReducers";
import {
  getAllSchoolcodesReducer,
  addSchoolcodeReducer,
  getSchoolcodeByIdReducer,
} from "./reducers/schoolcodeReducers";
import {
  getAllSubjectsReducer,
  addSubjectReducer,
  getSubjectByIdReducer,
} from "./reducers/subjectReducers";

import {
  getAllDifficultysReducer,
  addDifficultyReducer,
  getDifficultyByIdReducer,
} from "./reducers/difficultyReducers";

import {
  getAllClassssReducer,
  addClasssReducer,
  getClasssByIdReducer,
} from "./reducers/classsReducers";

import { cartReducer } from "./reducers/cartReducer";
import {
  loginUserReducer,
  registerUserReducer,
  getAllUsersReducer,
} from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  editPizzaReducer: editPizzaReducer,
  getAllUsersReducer: getAllUsersReducer,
  getAllQuizsReducer: getAllQuizsReducer,
  addQuizReducer: addQuizReducer,
  getQuizByIdReducer: getQuizByIdReducer,
  editQuizReducer: editQuizReducer,

  getAllSchoolcodesReducer: getAllSchoolcodesReducer,
  addSchoolcodeReducer: addSchoolcodeReducer,
  getSchoolcodeByIdReducer: getSchoolcodeByIdReducer,

  getAllSubjectsReducer: getAllSubjectsReducer,
  addSubjectReducer: addSubjectReducer,
  getSubjectByIdReducer: getSubjectByIdReducer,

  getAllDifficultysReducer: getAllDifficultysReducer,
  addDifficultyReducer: addDifficultyReducer,
  getDifficultyByIdReducer: getDifficultyByIdReducer,

  getAllClassssReducer: getAllClassssReducer,
  addClasssReducer: addClasssReducer,
  getClasssByIdReducer: getClasssByIdReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

//const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, applyMiddleware(thunk));

export default store;
