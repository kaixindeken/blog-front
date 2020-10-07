import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'

const ChangeTags = (data) => ({
    type: constants.CHANGE_TAG_DATA,
    data:data
});

const ChangeArticles = (data) => ({
    type: constants.CHANGE_ARTICLE_LIST,
    data:data
});

const ChangeHotspot = (data) => ({
    type: constants.CHANGE_HOTSPOT,
    data: data
});

export const getTags = () => {
    return (dispatch)=>{
        axios.get(BASE_URL + 'share/tags').then((res)=>{
            const result = Extract(res.data);
            dispatch(ChangeTags(result.data));
        }).catch(()=>{
            console.log('error');
        });
    }
};

export const getArticles = ()=>{
    return (dispatch)=>{
        axios.get(BASE_URL + 'share/articles').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            for (let i=0;i<data.length;i++){
                data[i].views = 0;
                if (data[i].view !== null){
                    data[i].views = data[i].view.views;
                }
            }
            dispatch(ChangeArticles(data));
        }).catch(()=>{
            console.log('error');
        });
    }
};

export const getHotspot = () => {
    return (dispatch) => {
        axios.get(BASE_URL + 'hotspot').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(ChangeHotspot(data));
        }).catch(()=>{
            console.log('error');
        });
    }
}
