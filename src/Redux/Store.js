import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import BooksReducer from "./BookCatReducer";

let reducers = combineReducers({
    NewPage : BooksReducer,
    
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)) //Создание store через redux-thunk 
export default store;