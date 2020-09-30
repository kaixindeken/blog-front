import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'

const ChangeTags = (data) => ({
    type: constants.CHANGE_TAG_DATA,
    data:data
});

const ChangeArticles = (data) => ({
    type: constants.CHANGE_ARTICLE_DATA,
    data:data
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
                let desc = '| ';
                for (let j=0;j<data[i].tag.length;j++){
                    desc = desc + data[i].tag[j].title + ' | '
                }
                data[i].description = desc;
            }
            dispatch(ChangeArticles(data));
        }).catch(()=>{
            console.log('error');
        });
    }
};
