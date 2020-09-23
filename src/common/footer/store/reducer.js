import {fromJS} from 'immutable';
import {CHANGE_RECORD} from "./constants";

const defaultState = fromJS({
    nickname: '',
    record: ''
});

export default (state = defaultState, action)=>{
    switch (action.type){
        case CHANGE_RECORD:
            return state.merge({
                nickname: action.nickname,
                record: action.record
            });

        default:
            return state;
    }
}
