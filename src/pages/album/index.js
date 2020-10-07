import React, {PureComponent} from "react";
import { AlbumHead} from "../style";
import {Divider, Layout, Typography} from "antd";
import AlbumList from "./components/AlbumList";
import { withRouter } from "react-router-dom"
import {connect} from "react-redux";
import {actionCreators} from "./store";

const {Content} = Layout
const {Title, Paragraph} = Typography
class Album extends PureComponent{
    render() {
        return (
            <Content style={{padding: "0 250px", margin: "50px 0"}}>
                <AlbumHead>
                    <Title style={{textAlign:"center"}}>专栏</Title>
                    <Paragraph style={{textAlign:"center", color: "gray"}}>让学习更加高效</Paragraph>
                </AlbumHead>
                <Divider/>
                <AlbumList/>
            </Content>
        );
    }

    componentDidMount() {
        this.props.getAlbums();
    }
}

const mapDispatch=(dispatch)=>({
    getAlbums(){
        dispatch(actionCreators.getAlbums());
    }
})

export default connect(null,mapDispatch)(withRouter(Album));
