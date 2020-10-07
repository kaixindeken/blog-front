import React, {Fragment, PureComponent} from "react";
import { List, Space, Divider  } from "antd";
import {ListRM} from "../../style";
import {connect} from "react-redux";
import { EyeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

class ArticleList extends PureComponent{

    getActions(tags){
        const actions = [];
        for (let i=0;i<tags.length;i++){
            actions.push(
                <Space style={{color: "grey"}}>{tags[i].title}</Space>
            );
        }
        return actions;
    }

    render() {
        const {list} = this.props;
        const listData = list.toJS();

        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );

        return(
            <ListRM>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10
                    }}
                    dataSource={ listData }
                    renderItem={item => (
                        <Fragment>
                            <Link to={"/detail/" + item.id}>
                                <List.Item
                                    key={item.id}
                                    actions={this.getActions(item.tag)}
                                    extra={[
                                        <IconText icon={EyeOutlined} text={item.views} key="eye"/>,
                                    ]}
                                >
                                    <List.Item.Meta
                                        title={item.title}
                                    />
                                </List.Item>
                            </Link>
                            <Divider />
                        </Fragment>
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
