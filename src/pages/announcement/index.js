import React, {Component, Fragment} from "react";
import { Layout , List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import {ConA} from "../style";

const { Content } = Layout;

class Announcement extends Component{
    render(){
        const listData = [];
        for (let i = 0; i < 4; i++) {
            listData.push({
                href: 'https://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            });
        }

        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );

        return (
            <Fragment>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <ConA>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                pageSize: 10,
                            }}
                            dataSource={listData}
                            footer={
                                <div>
                                    <b>ant design</b> footer part
                                </div>
                            }
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </ConA>
                </Content>
            </Fragment>
        );
    }
}

export default Announcement
