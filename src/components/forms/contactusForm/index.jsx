import { Button, Col, Form, Input, Row, Typography, Upload } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline, MdOutlineFileUpload } from "react-icons/md";
import "../formStyles.scss";

const ContactUsForm = () => {
  const { Title } = Typography;
  const [loading, setLoading] = useState(false);
  const onFinish = () => {};

  return (
    <Form
      name="messageForm"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      className="Form"
    >
      <Title className="headingText">Contact US</Title>

      <Row gutter={[12, 24]}>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input className="fields" />
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "invalid email!",
              },
            ]}
          >
            <Input className="fields" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[12, 24]}>
        <Col span={24}>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Input className="fields" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[12, 24]}>
        <Col span={24}>
          <Form.Item
            label="enquiry/message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your Address!",
              },
            ]}
          >
            <Input.TextArea className="fields" style={{ height: "5rem" }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          size="large"
          className="submitBtn"
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactUsForm;
