import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "../constants";

interface IAction {
  type: string;
}

const auth = (state: boolean = true, action: IAction) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

const reducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
