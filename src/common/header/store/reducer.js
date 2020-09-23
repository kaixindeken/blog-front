import {fromJS} from 'immutable';
import {CHANGE_LIST, CHANGE_NAME} from "./constants";

const defaultState = fromJS({
    name: '',
    list: []
});

export default (state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_NAME:
            return state.set('name',action.data);
        case CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state;
    }
}
