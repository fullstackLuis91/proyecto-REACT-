import React, { useContext } from "react"
import { Button, Form, Input } from "antd";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => { 
    const {login} = useContext(UserContext)


    const onFinish = (values) => {
    console.log("Success:", values);
    login(values)
  };

  return (
    <div>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please introduce your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please introduce your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login