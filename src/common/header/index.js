import React, {Component} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";
import {actionCreators} from "./store";

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

class HeaderRM extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name !== this.props.name || nextProps.list !== this.props.list;
    }

    getMenuItems(){
        const { list } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length){
            for (let i = 0; i<newList.length; i++){
                pageList.push(
                    <Menu.Item key={'nav'+i}>{newList[i]}</Menu.Item>
                );
            }
        }
        return pageList;
    }

    render() {
        const {name, list, handleName, handleMenuItems} = this.props;

        return (
            <Header width={'100px'}>
                <Logo className={handleName(name)}>{name}</Logo>
                <Menu className={handleMenuItems(list)} theme={'dark'} mode="horizontal">
                    {this.getMenuItems()}
                </Menu>
            </Header>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.getIn(['header','name']),
        list: state.getIn(['header','list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleName(name){
            if (name === '' ){
                dispatch(actionCreators.getName())
            }
        },
        handleMenuItems(list){
            if (list.size === 0){
                dispatch(actionCreators.getList())
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRM);

