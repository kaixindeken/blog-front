import React, {Component} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";
import {actionCreators} from "./store";

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

class HeaderRM extends Component{

    render() {
        const {name, handleName} = this.props;

        return (
            <Header width={'100px'}>
                <Logo className={handleName(name)}>{name}</Logo>
                <Menu theme={'dark'} mode="horizontal">
                    <Menu.Item key={'n1'}>nav1</Menu.Item>
                    <Menu.Item key={'n2'}>nav2</Menu.Item>
                    <Menu.Item key={'n3'}>nav3</Menu.Item>
                </Menu>
            </Header>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.getIn(['header','name'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleName(name){
            if (name === '' ){
                dispatch(actionCreators.getName())
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRM);

