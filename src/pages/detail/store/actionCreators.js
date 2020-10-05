import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title: title,
    content: content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get(BASE_URL+"detail?id="+id).then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(changeDetail(data.title,data.content));
        });
    }
}
