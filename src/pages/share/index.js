import React, {PureComponent} from "react";
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
            <Content style={{ padding: '0 100px', overflow:"hidden" }}>
                <PageHeader
                    title="分享"
                    subTitle="分享创造，分享技巧"
                />
                <ArticleList />
                <TagsCard />
                <HotAlbum />
            </Content>
        );
    }

    componentDidMount() {
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
