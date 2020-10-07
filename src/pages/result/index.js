import React, { PureComponent} from "react";
import {Divider, Layout, PageHeader, Typography} from "antd";
import {AlbumHead, ResultDetail} from "../style";
import ArticleList from "./components/ArticleList";
import {actionCreators} from "../result/store";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"

const { Content } = Layout;
const {Title, Paragraph} = Typography

class Result extends PureComponent {
    render() {
        window.scrollTo(0, 0);
        const {title,subtitle} = this.props
        return (
            <Content style={{ padding: '0 250px'}}>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={''}
                    subTitle={'Back'}
                />
                <AlbumHead>
                    <Title>{title}</Title>
                    <Paragraph>{subtitle}</Paragraph>
                </AlbumHead>
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
