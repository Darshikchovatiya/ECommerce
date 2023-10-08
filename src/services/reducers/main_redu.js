import { combineReducers } from "redux";
import { Products_Re } from "./products_redu";
import { Auth_Re } from "./auth_redu";

const mainReducer = combineReducers({
    Products_Re,
    Auth_Re

})

export default mainReducer;