import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'
import {fromJS} from "immutable";

const ChangeRecord = (nickname, record) => ({
    type: constants.CHANGE_RECORD,
    nickname: fromJS(nickname),
    record: fromJS(record)
});

export const getRecord = () => {
    return (dispatch)=>{
        axios.get(BASE_URL + 'site/record').then((res)=>{
            const result = Extract(res.data);
            const nickname = result.data[0].value;
            const record = result.data[1].value;
            dispatch(ChangeRecord(nickname, record));
        }).catch(()=>{
            console.log('error');
        });
    }
}
