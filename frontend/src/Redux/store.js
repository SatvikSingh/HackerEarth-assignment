import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {showallimage, newProductReducer, showoneimage} from "./Reducers/imageReducer"
const reducer = combineReducers({
  Image: showallimage,
  newImage: newProductReducer,
  oneImage: showoneimage
});

let initialstate = {};

const middleware=[thunk];

const store = createStore(
    reducer,
    initialstate,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
);

export default store;