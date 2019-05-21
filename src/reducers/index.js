import {combineReducers} from "redux";
import {pageReducer} from "./page";
import {userReducer} from "./user";

export const initialState = {
  user: {
    name: 'Василий',
    surname: 'Реактов',
    age: 27,
  },
};

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});