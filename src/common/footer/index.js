import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

class FooterRM extends Component{

    render(){

        const {nickname, record, handleRecord} = this.props

        return (
            <Footer
                style={{ textAlign: 'center' }}
                className={handleRecord(nickname,record)}
            >
                由 {nickname} 设计和编码 ｜ 备案号 : {record}
            </Footer>
        );
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
