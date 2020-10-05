import React, {PureComponent} from "react";
import { AlbumHead} from "../style";
import {Divider, Layout, Typography} from "antd";
import AlbumList from "./components/AlbumList";

const {Content} = Layout
const {Title, Paragraph} = Typography
class Album extends PureComponent{
    render() {
        return (
            <Content style={{padding: "0 250px", margin: "50px 0"}}>
                <AlbumHead>
                    <Title style={{textAlign:"center"}}>专栏</Title>
                </AlbumHead>
                <Divider/>
                <AlbumList/>
            </Content>
        );
    }
}

export default Album;
