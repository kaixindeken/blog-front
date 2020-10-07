import React, {PureComponent} from "react";
import { Card, List } from 'antd';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class HotAlbum extends PureComponent
{
    render() {

        const {list} = this.props;
        const listData = list.toJS();

        return (
            <Card title="热门资源" style={{ float:"right", width: 400, borderRadius: 8, marginTop: 50 }}>
                <List
                    dataSource={listData}
                    renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Link to={'/result/album/'+item.id}>{item.title}</Link>}
                                />
                            </List.Item>
                    )}
                />
            </Card>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['share','hotspot']),
})


export default connect(mapState)(HotAlbum);
