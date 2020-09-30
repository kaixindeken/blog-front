import React, {Component, Fragment} from "react";
import { Layout,BackTop  } from 'antd';
import ArticleList from './components/List';
import TagsCard from "./components/TagsCard";
import {actionCreators} from "./store";
import {connect} from "react-redux";

const { Content } = Layout;

class Share extends Component{

    render(){
        return (
            <Fragment>
                <Content style={{ padding: '0 100px',margin:'50px 0', overflow:"hidden" }}>
                    <ArticleList />
                    <TagsCard />
                </Content>
                <BackTop style={{
                    height: 40,
                    width: 40,
                    lineHeight: '40px',
                    borderRadius: 4,
                    backgroundColor: '#1088e9',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                }}>
                    Up
                </BackTop>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.changeTagsData();
        this.props.changeListData();
    }
}

const mapDispatch = (dispatch)=>({
    changeTagsData(){
        const action = actionCreators.getTags();
        dispatch(action);
    },
    changeListData(){
        const action = actionCreators.getArticles();
        dispatch(action);
    }
})

export default connect(null,mapDispatch)(Share)
