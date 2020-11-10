import React, {Fragment, PureComponent} from "react";
import { Layout, PageHeader  } from 'antd';

import ArticleList from './components/List';
import TagsCard from "./components/TagsCard";
import {actionCreators} from "./store";
import {connect} from "react-redux";
import HotAlbum from "./components/HotAlbum";

const { Content } = Layout;

class Share extends PureComponent{

    render(){
        window.scrollTo(0, 0)
        return (
            <Content style={{ padding: '0 6.7%', overflow:"hidden" }}>
                <PageHeader
                    title="分享"
                    subTitle="分享创造，分享技巧"
                />
                {this.getArticles()}
                {this.getCards()}
            </Content>
        );
    }

    getCards(){
        if (document.body.clientWidth >= 700){
            return (
                <Fragment>
                    <TagsCard />
                    <HotAlbum />
                </Fragment>
            );
        }
    }

    getArticles(){
        if (document.body.clientWidth >= 700){
            return (
                <div style={{float:"left", width:"60%"}}>
                    <ArticleList/>
                </div>
            );
        }else{
            return (
                <ArticleList/>
            );
        }
    }

    componentDidMount() {
        console.log(document.body.clientWidth);
        this.props.changeTagsData();
        this.props.changeListData();
        this.props.changeHotspot();
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
    },
    changeHotspot(){
        const action = actionCreators.getHotspot();
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Share)
