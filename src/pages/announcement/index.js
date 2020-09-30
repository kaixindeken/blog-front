import React, {Component, Fragment} from "react";
import { Layout } from 'antd';
import AnnouncementList from "./components/AnnouncementList";

const { Content } = Layout;

class Announcement extends Component{
    render(){
        return (
            <Fragment>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <AnnouncementList />
                </Content>
            </Fragment>
        );
    }
}

export default Announcement
