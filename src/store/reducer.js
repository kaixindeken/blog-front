import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store'
import {reducer as footerReducer} from '../common/footer/store'
import {reducer as shareReducer} from '../pages/share/store'

const reducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    share: shareReducer
})

export default reducer;
