import React, { PureComponent} from "react";
import {Divider, Layout} from "antd";
import { ResultDetail} from "../style";
import ArticleList from "./components/ArticleList";
import RandomImage from "./components/Image"
import {actionCreators} from "../result/store";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"
import Topic from "./components/Topic";

const { Content } = Layout;

class Result extends PureComponent {
    render() {
        window.scrollTo(0, 0);
        return (
            <Content>
                <Topic/>
                <Divider/>
                <ResultDetail>
                    <ArticleList/>
                </ResultDetail>
            </Content>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const type = this.props.match.params.type;
        this.props.getResult(type, id);
    }
}

const mapState= (state)=>({
    title: state.getIn(['result','title']),
    subtitle: state.getIn(['result','subtitle'])
})

const mapDispatch=(dispatch)=>({
    getResult(type, id){
        dispatch(actionCreators.getResult(type, id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Result));
