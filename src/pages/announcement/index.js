import React, {Component} from "react";
import { Layout } from 'antd';
import {Con} from "../style";

const { Content } = Layout;

class Announcement extends Component{
    render(){
        return (
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Con>
                    announcement~
                </Con>
            </Content>
        );
    }
}

export default Announcement
