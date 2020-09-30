import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    articleList: [],
    announcementList: [
        {id: 1, href:'#', title:'shaya',description:'?????'},
        {id: 2, href:'#', title:'gun',description:'?????'}
    ],
    tagList: []
});

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_TAG_DATA:
            return state.set('tagList',fromJS(action.data));
        case constants.CHANGE_ARTICLE_DATA:
            return state.set('articleList',fromJS(action.data));
        default :
            return state;
    }
}
