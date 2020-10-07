import axios from 'axios'
import {BASE_URL, Extract} from "../../../utils/request";
import * as constants from './constants'

const changeAlbums = (data) => ({
    type: constants.CHANGE_ALBUM,
    data: data
});

export const getAlbums = () => {
    return (dispatch) => {
        axios.get(BASE_URL + 'albums').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(changeAlbums(data));
        });
    }
}
