import React, {Component, Fragment} from "react";
import { Layout , Tag, Card, List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import {Con} from "../style";

const { Content } = Layout;

class Share extends Component{

    render(){

        const listData = [];
        for (let i = 0; i < 23; i++) {
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
                <Content style={{ padding: '0 50px', marginTop: 64, marginLeft: 100 }}>
                    <Con>
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
                        </Con>
                    <Card title="标签" style={{ width: 300, float: "left", marginLeft: 50 }}>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold" style={{marginTop:10}}>gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </Card>
                </Content>

            </Fragment>
        );
    }
}

export default Share
