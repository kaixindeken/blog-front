import React, {Component} from "react";
import {Card, Tag} from "antd";
import {connect} from "react-redux";

class TagsCard extends Component{

    render() {
        const { list } = this.props;
        const listData = list.toJS()
        return(
            <Card title="标签" style={{ float:"right", width: 400 }}>
                {
                    listData.map((item)=>{
                        return (
                            <Tag key={item.id} color={item.color} style={{marginTop:10}}>
                                {item.title}
                            </Tag>
                        );
                    })
                }
            </Card>
        );
    }
}

const mapState = (state)=>({
    list: state.getIn(['share','tagList'])
})

export default connect(mapState)(TagsCard);
