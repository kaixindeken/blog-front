import React, {Component} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";
import {actionCreators} from "./store";

import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";

const { Header } = Layout;

class HeaderRM extends Component{

    getList(){
        const { list } = this.props;
        return list.toJS();
    }

    getMenuItems(){
        const newList = this.getList()
        const pageList = [];
        if (newList.length){
            for (let i = 0; i<newList.length; i++){
                pageList.push(
                    <Menu.Item key={'nav'+i}>
                        <Link to={newList[i].path}>
                            {newList[i].title}
                        </Link>
                    </Menu.Item>
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

