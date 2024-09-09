import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = async (values) => {
  try {
    const response = await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // fields
      }),
    });
    //setLoading(false);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка:", errorData);
    } else {
      window.location.replace("/login");
    }
  } catch (error) {
    //setLoading(false);
    console.error("Ошибка сети:", error);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const RegistrationFormAntD = () => (
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
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (value.length > 6 && value.length < 20) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error(
                "Password must be more than 6 symbols and less than 20."
              )
            );
          },
        }),
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
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Password Confirmation"
      name="password-confirmation"
      /* dependencies={['password']} */
      rules={[
        {
          required: true,
          message: "Please input your password again!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Passwords do not match!"));
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
