import React, { PureComponent} from "react";
import { Layout, PageHeader, Typography} from "antd";
import {AlbumHead, } from "../../style";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"

const { Content } = Layout;
const {Title, Paragraph} = Typography

class Topic extends PureComponent {
    render() {
        window.scrollTo(0, 0);
        const {title,subtitle} = this.props
        return (
            <Content style={{ padding: '0 10%'}}>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={''}
                    subTitle={'Back'}
                />
                <AlbumHead>
                    <Title>{title}</Title>
                    <Paragraph>{subtitle}</Paragraph>
                </AlbumHead>
            </Content>
        );
    }
}

const mapState= (state)=>({
    title: state.getIn(['result','title']),
    subtitle: state.getIn(['result','subtitle'])
})

export default connect(mapState)(withRouter(Topic));
