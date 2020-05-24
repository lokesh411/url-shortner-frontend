import React from 'react';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends React.Component {

  // componentDidMount () {
  //   const {dispatch} = this.props;
  //   //code to check login status;
  //   dispatch({
  //     type: 'CHECK_LOGIN_STATUS',
  //   }).then((res)=>{})
  // }

  submitHandler = (values) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'LOGIN_USER',
      values
    })
    console.log(values)
  }

  errorHandler = (values) => {
    console.error('Error handler ::: ', values)
  }

  registerAccount = () => {
    const { history } = this.props;
    history.push('/register')
  }

  render() {
    console.log('this.props in login compoent ::: ', this.props);
    return (
      <div style={{ textAlign: 'center', marginTop: 300 }}>
        <h1>Welcome to the mighty URL shortner service</h1>
        <Form
          size="middle"
          onFinish={this.submitHandler}
          onFinishFailed={this.errorHandler}
          {...layout}
          style={{ width: 500, margin: '0 auto' }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input style={{ width: 300 }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password style={{ width: 300 }} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div>
          Don't have an account?, <a onClick={this.registerAccount}>Click here</a> to get one right away
        </div>
      </div>
    )
  }
}


export default withRouter(Login);