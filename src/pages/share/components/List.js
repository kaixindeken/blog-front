import React, {Component} from "react";
import { List } from "antd";
import {ListRM} from "../../style";
import {connect} from "react-redux";

class ArticleList extends Component{

    render() {
        const {list} = this.props;
        const listData = list.toJS();
        return(
            <ListRM>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 15,
                    }}
                    dataSource={ listData }
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />

            </ListRM>
        );
    }

}

const mapState = (state)=>({
    list: state.getIn(['share','articleList']),
});

export default connect(mapState)(ArticleList);
