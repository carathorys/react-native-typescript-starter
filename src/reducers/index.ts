import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { AsyncStorage } from "react-native";
import { persistCombineReducers, persistReducer } from "redux-persist";

export default combineReducers({
  form: formReducer,
});
