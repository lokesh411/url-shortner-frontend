import React from 'react';
import { Form, Input, Button } from 'antd';

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
export default class Register extends React.Component {

  submitHandler = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'REGISTER_USER',
      values
    })
  }

  errorHandler = (values) => {
    console.error('Error handler ::: ', values)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Register to shorten the URLs with EASE</h1>
        <Form
          size="middle"
          onFinish={this.submitHandler}
          onFinishFailed={this.errorHandler}
          {...layout}
          style={{ width: 500, margin: '0 auto' }}
        >
          <Form.Item
            label="Username"
            name="username"
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
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid email'
              },
              {
                required: true,
                message: 'Please input your email!',
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
              Register
                </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}