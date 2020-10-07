import Loadable from 'react-loadable';
import React from "react";
import {Spin} from "antd";

const LoadableComponent = Loadable({
    loader: () => import('../detail'),
    loading(){
        return (
            <div><Spin/></div>
        );
    },
});

export default () => <LoadableComponent/>;
