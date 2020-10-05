import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'

const ChangeResult = (title, subtitle, list) => ({
    type: constants.CHANGE_RESULT,
    title: title,
    subtitle: subtitle,
    list: list
})

export const getResult = (type, id) => {
    return (dispatch) => {
        axios.get(BASE_URL + type + '?id=' + id).then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            const title = data.title;
            const subtitle = data.description;
            const list = data.article;
            for (let i=0;i<list.length;i++){
                list[i].views = 0;
                if (list[i].view !== null){
                    list[i].views = list[i].view.views;
                }
            }
            dispatch(ChangeResult(title,subtitle,list))
        });
    };
};
