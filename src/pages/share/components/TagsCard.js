import React, {Component} from "react";
import {Card, Tag} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class TagsCard extends Component{

    render() {
        const { list } = this.props;
        const listData = list.toJS()
        return(
            <Card title="标签" style={{ float:"right", width: 400, borderRadius: 8 }}>
                {
                    listData.map((item)=>{
                        return (
                            <Link to={'/result/tag/'+item.id}>
                                <Tag key={item.id} color={item.color} style={{marginTop:10, cursor: "pointer"}}>
                                    {item.title}
                                </Tag>
                            </Link>
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

const mapDispatch = (dispatch) => ({
    getResult(id){

    }
});

export default connect(mapState,mapDispatch)(TagsCard);
