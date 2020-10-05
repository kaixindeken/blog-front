import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    articleList: [],
    tagList: []
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_TAG_DATA:
            return state.set('tagList',fromJS(action.data));
        case constants.CHANGE_ARTICLE_LIST:
            return state.set('articleList',fromJS(action.data));
        default :
            return state;
    }
}
