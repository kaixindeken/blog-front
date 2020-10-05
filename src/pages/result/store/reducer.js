import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    title:"",
    subtitle:"",
    list:[]
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_RESULT:
            return state.merge({
                title: action.title,
                subtitle: action.subtitle,
                list: action.list
            });
        default :
            return state;
    }
}
