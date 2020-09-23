import {fromJS} from 'immutable';
import {CHANGE_NAME} from "./constants";

const defaultState = fromJS({
    name: ''
});

export default (state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_NAME:
            return state.set('name',action.data)
        default:
            return state;
    }
}
