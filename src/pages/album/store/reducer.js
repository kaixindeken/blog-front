import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    list:[]
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_ALBUM:
            return state.set('list', fromJS(action.data));
        default :
            return state;
    }
}
