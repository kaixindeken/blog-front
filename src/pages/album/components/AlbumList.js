import React, {PureComponent} from "react";
import { List, Card } from 'antd';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

class AlbumList extends PureComponent{
    render() {
        const {list} = this.props;
        const data = list.toJS();
        return (
            <List
                grid={this.changeTy()}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Link to={'/result/album/'+item.id}>
                            <Card title={item.title} style={{borderRadius:4}}>
                                {item.description.substr(0,36)+'...'}
                            </Card>
                        </Link>
                    </List.Item>
                )}
            />
        );
    }

    changeTy(){
        if (document.body.clientWidth >= 900){
            return {
                gutter: 16,
                column: 4
            }
        }else{
            return {
                gutter: 16,
                column: 1
            }
        }
    }
}

const mapState = (state) => ({
    list: state.getIn(['album','list'])
});

export default connect(mapState)(withRouter(AlbumList));
