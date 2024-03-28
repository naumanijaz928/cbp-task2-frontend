import { useState } from "react";
import { useAuth } from "../../../core/store/authContext";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import "./login.scss";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();
  const handleLogin = (values) => {
    login(values);
  };
  return (
    <div id="loginPage">
      <Form
        name="loginForm"
        layout="vertical"
        onFinish={handleLogin}
        autoComplete="off"
        id="loginForm"
      >
        <Title className="headingText">Login</Title>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="fields" />
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
          <Input.Password className="fields" />
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            size="large"
            className="submitBtn"
          >
            Login
          </Button>
        </Form.Item>
        <Link to="forget-password" className="forget">
          Forget Password
          {/* <Text ></Text> */}
        </Link>
      </Form>
    </div>
  );
};
export default Login;
