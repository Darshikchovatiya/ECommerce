import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./services/reducers/main_redu";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;