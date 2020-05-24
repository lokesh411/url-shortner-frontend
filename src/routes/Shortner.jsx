import React from 'react';
import { Form, Input, Button } from 'antd'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
// @Form.create()
class Shortner extends React.Component {

  submitHandler = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'SHORTEN_URL',
      value: values.url
    })
  }

  errorHandler = (values) => {
  }

  render() {
    return (
      <>
        <Form
          size="middle"
          onFinish={this.submitHandler}
          onFinishFailed={this.errorHandler}
          {...layout}
          style={{ width: 500, margin: '0 auto' }}
        >
          <Form.Item
            label="URL"
            name="url"
            rules={[
              {
                required: true,
                message: 'Please enter the URL',
              },
              {
                validator: (rule, value, callback) => {
                  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
                  if (!regex.test(value)) {
                    callback('Please enter a valid URL');
                    return;
                  }
                  callback()
                }
              }
            ]}
          >
            <Input placeholder="Enter URL" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Shorten It
            </Button>
          </Form.Item>
        </Form>
        {
          this.props.shortenedURL &&
          <div>The Shortned URL is <a target="_blank" href={this.props.shortenedURL}>{this.props.shortenedURL}</a></div>
        }
      </>
    )
  }
}

export default Shortner;