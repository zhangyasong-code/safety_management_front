import React from 'react';
import './index.less';
import './index.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row,Col,Form, Input, Button, Checkbox } from 'antd';
import util from '../../utils/utils';
import {withRouter} from 'react-router-dom';
import { Card } from 'antd';
import Background from './images/test2.jpg';

var sectionStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${Background})` 
  };
class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:'',
            redirect:'/admin/home'
         };
    }

    // 获取输入框的信息
    onInputChange=(e)=>{
        let inputname = e.target.name;
        let inputvalue = e.target.value;
       
        this.setState({
            [inputname]:inputvalue
        })
    }

    onSubmit=()=>{
        // 登录信息
        let logInfo={
            username:this.state.username,
            password:this.state.password
        };

        // 表单验证
        let checkResult = util.checkInfo(logInfo);
        
        // 判断表单验证结果
        if(checkResult === 'success'){
            // localstorage存取
            util.setStorage('userInfo',logInfo);
            // 推往主页
            this.props.history.push(this.state.redirect);
        }else{
            alert("账户和密码输入有误!请重新输入！");
        }
    }

    render() {
        return (
            <div style={sectionStyle} className="background-image">
            <Card
            hoverable
            className="login-card"
          >
            <Row className="login">
                <Col>
                   
                    <h1 className="login-frot">安全管理系统</h1>
                    <Form className="login-form" initialValues={{ remember: true }}>
                        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!!!' }]}>
                            <Input name="username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名，默认admin" onChange={this.onInputChange} />
                        </Form.Item>

                        <Form.Item  name="password" rules={[{ required: true, message: '请输入密码!!!' }]}>
                            <Input name="password" prefix={<LockOutlined className="site-form-item-icon" />}type="password" placeholder="请输入密码，默认admin" onChange={this.onInputChange} />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住用户和密码</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" >
                                忘记密码
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onSubmit} >
                                登录
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button type="primary" htmlType="submit" className="login-form-button" >
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            </Card>
            </div>
        );
    }
}

export default withRouter(index);