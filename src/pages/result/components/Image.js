import React, {PureComponent} from "react";
import {Image} from "antd";
import {ImageRM} from "../../style";

class RandomImage extends PureComponent{

    render() {
        const random = Math.floor(Math.random()*10);
        console.log(random);
        return (
            <ImageRM>
                <Image
                    src={require('../img/'+random+'.png')}
                />
            </ImageRM>
        );
    }

}

export default RandomImage;
