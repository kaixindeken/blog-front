import React, {Fragment, PureComponent} from "react";
import {Divider, List, Space} from "antd";
import {connect} from "react-redux";
import { EyeOutlined } from '@ant-design/icons';
import {Link, withRouter} from "react-router-dom";

class ArticleList extends PureComponent{

    render() {
        const {list} = this.props;

        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );

        return(
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={ list }
                    renderItem={item => (
                        <Fragment>
                            <Link to={"/detail/" + item.id}>
                                <List.Item
                                    key={item.id}
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
        );
    }

}

const mapState= (state)=>({
    list: state.getIn(['result','list']),
})

export default connect(mapState)(withRouter(ArticleList));
