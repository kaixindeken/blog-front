import React, { PureComponent} from "react";
import { Layout, PageHeader} from "antd";
import { ResultDetail } from "../style";
import ArticleList from "./components/ArticleList";
import {actionCreators} from "../result/store";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"

const { Content } = Layout;

class Result extends PureComponent {
    render() {
        window.scrollTo(0, 0);
        const {title,subtitle} = this.props
        return (
            <Content style={{ padding: '0 250px'}}>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={title}
                    subTitle={subtitle}
                /><ResultDetail>
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
