import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline, MdOutlineFileUpload } from "react-icons/md";
// import { MdOutlineFileUpload } from "react-icons/md";
import "./registerStudent.scss";
import { RegisterStudentAPI } from "../../../core/apis";
import dayjs from "dayjs";
const { Title } = Typography;
const RegisterStudent = () => {
  const [registerForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const beforeUpload = (file) => {
    // Limit to only one image file
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    setImageFile(file);
    return false; // Prevent default upload behavior
  };
  const onRemove = () => {
    setImageFile(null);
  };
  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const obj = {
        ...values,
        image: "data:image/png;base64,iVBORw0KGgoA",
        date_of_birth: dayjs(values?.data_of_birth).format("X"),
      };
      const res = await RegisterStudentAPI(obj);
      if (res?.status < 400) {
        message.success(res?.data?.message);
        registerForm.resetFields();
        navigate("/login");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div id="registerPage">
      <Form
        name="registerForm"
        layout="vertical"
        onFinish={handleRegister}
        autoComplete="off"
        id="registerForm"
        form={registerForm}
      >
        <Title className="headingText">Register Account</Title>
        <Form.Item>
          <Upload
            beforeUpload={beforeUpload}
            maxCount={1}
            accept="image/*"
            fileList={
              imageFile
                ? [
                    {
                      uid: "image",
                      name: "image",
                      status: "done",
                      url: URL.createObjectURL(imageFile),
                    },
                  ]
                : []
            }
            listType="picture-card"
            onRemove={onRemove}
          >
            {imageFile ? (
              <div>
                <MdDeleteOutline size={20} />
                <div style={{ marginTop: 8 }}>Change</div>
              </div>
            ) : (
              <Button icon={<MdOutlineFileUpload />}>Upload Image</Button>
            )}
          </Upload>
        </Form.Item>
        <Row gutter={[12, 24]}>
          <Col sm={24} md={12} lg={12}>
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
          </Col>
          <Col sm={24} md={12} lg={12}>
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
          </Col>
        </Row>
        <Row gutter={[12, 24]}>
          <Col sm={24} md={12} lg={12}>
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input className="fields" />
            </Form.Item>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
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
              label="Date Of Birth"
              name="date_of_birth"
              rules={[
                {
                  required: true,
                  message: "Please input your Date of Birth!",
                },
                {
                  type: "date",
                  message: "Invalid Date",
                },
              ]}
            >
              <Input className="fields" type="date" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 24]}>
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your Address!",
                },
              ]}
            >
              <Input className="fields" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 24]}>
          <Col sm={24} md={12} lg={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}
            >
              <Input className="fields" />
            </Form.Item>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <Form.Item
              label="City/Town"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your City/Town!",
                },
              ]}
            >
              <Input className="fields" />
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
            Create Account
          </Button>
        </Form.Item>
        <div className="links">
          <Link to="forget-password" className="forget">
            Forget Password
          </Link>
          <Link to="/login" className="signin">
            Already have account
            {/* <FaArrowRightToBracket /> */}
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterStudent;
