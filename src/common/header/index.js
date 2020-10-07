import React, {PureComponent} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";
import {actionCreators} from "./store";

import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";

const { Header } = Layout;
class HeaderRM extends PureComponent{

    render() {
        const {name} = this.props;

        return (
            <Header width={'100px'}>
                <Link to="/">
                    <Logo>{name}</Logo>
                </Link>
                <Menu theme={'dark'} mode="horizontal" style={{overflow: "hidden"}}>
                    <Menu.Item><Link to={'/'}>分享</Link></Menu.Item>
                    <Menu.Item><Link to={'/album'}>专栏</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }

    componentDidMount() {
        this.props.handleName();
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.getIn(['header','name'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleName(){
            dispatch(actionCreators.getName())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRM);

