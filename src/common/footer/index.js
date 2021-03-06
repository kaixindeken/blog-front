import React, { PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

class FooterRM extends PureComponent{

    render(){

        const { nickname, record } = this.props

        return (
            <Footer style={{ textAlign: 'center' }}>
                由 {nickname} 设计和编码 ｜ 备案号 : {record}
            </Footer>
        );
    }

    componentDidMount() {
        const nickname = this.props.nickname;
        const record = this.props.record;
        this.props.handleRecord(nickname,record);
    }

}


const mapStateToProps = (state) => {
    return {
        nickname: state.getIn(['footer','nickname']),
        record: state.getIn(['footer', 'record'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRecord(nickname, record){
            if (nickname === '' || record === ''){
                dispatch(actionCreators.getRecord());
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterRM);
