import React from 'react';
import './index.less';
import {Row} from 'antd';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <Row className="home-wrap" justify="center">
                欢迎进入安全管理系统！！！
            </Row>
        );
    }
}

export default index;