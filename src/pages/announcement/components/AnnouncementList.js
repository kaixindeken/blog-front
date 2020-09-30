import React, {Component} from "react";
import {List} from "antd";
import {ConA} from "../../style";
import {connect} from "react-redux";

class AnnouncementList extends Component{

    render() {
        const {list} = this.props;
        const listData = list.toJS();
        return(
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
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </ConA>
        );
    }

}

const mapState = (state) => ({
    list: state.getIn(['share','announcementList']),
});

export default connect(mapState)(AnnouncementList);
