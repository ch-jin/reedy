import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import loadingReducer from "./loading_reducer";
import dropdownReducer from "./dropdown_reducer";
import articlesReducer from "./articles_reducer";
import feedsReducer from "./feeds_reducer";
import modalReducer from "./modal_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  loading: loadingReducer,
  dropdown: dropdownReducer,
  articles: articlesReducer,
  feeds: feedsReducer,
  modal: modalReducer,
});

export default rootReducer;
