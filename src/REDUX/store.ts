import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import usersReducer from "../dndUsers/BLL/usersReducer";
import mainPageReducer from "../wargaming/BLL/mainPageReducer";
import pacManReducer from "../pacman/BLL/pacManReducer";
import calcReducer from "../calc/BLL/calcReducer";

const reducers = combineReducers({
    users: usersReducer,
    mainPage: mainPageReducer,
    pacMan: pacManReducer,
    calc: calcReducer,
});


let store: any = createStore(reducers, applyMiddleware(thunk));


export default store;