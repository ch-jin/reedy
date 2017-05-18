import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import loadingReducer from "./loading_reducer";
import dropdownReducer from "./dropdown_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  loading: loadingReducer,
  dropdown: dropdownReducer,
});

export default rootReducer;
