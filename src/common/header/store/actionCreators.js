import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'
import {fromJS} from "immutable";

const ChangeName = (data) => ({
    type: constants.CHANGE_NAME,
    data: fromJS(data)
});

const ChangeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
});

export const getName = () => {
    return (dispatch)=>{
        axios.get(BASE_URL + 'site/name').then((res)=>{
            const result = Extract(res.data);
            dispatch(ChangeName(result.data.value));
        }).catch(()=>{
            console.log('error');
        });
    }
}

export const getList = () => {
    return (dispatch)=>{
        axios.get(BASE_URL + 'site/nav').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            const list = [];
            for (let i = 0; i<data.length; i++){
                list.push(data[i].title);
            }
            dispatch(ChangeList(list));
        }).catch(()=>{
            console.log('error');
        })
    }
}
