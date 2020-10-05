import React, {PureComponent} from "react";
import { List, Card } from 'antd';

class AlbumList extends PureComponent{
    render() {

        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
        ];

        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title} style={{borderRadius:4}}>Card content</Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default AlbumList;
