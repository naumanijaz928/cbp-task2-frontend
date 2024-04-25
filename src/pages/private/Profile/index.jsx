import {
  Avatar,
  Button,
  Card,
  Col,
  Drawer,
  Flex,
  Modal,
  Row,
  Spin,
  Typography,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import "./profile.scss";
import { getStudentProfile } from "../../../core/apis";
import { useAuth } from "../../../core/store/authContext";
import dayjs from "dayjs";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import RegisterForm from "../../../components/forms/registerForm";
const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const { Title, Text } = Typography;
  const { user } = useAuth();
  const id = user?.token?.user_id;

  const getProfileFun = async () => {
    setLoading(true);
    try {
      const res = await getStudentProfile(id);
      if (res?.status < 400) {
        setProfile(res?.data?.data[0]);
      } else {
        message.error("something wrong");
      }
      setLoading(false);
    } catch (error) {
      console.log(error, "ERR Profile");
      setLoading(false);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getProfileFun();
  }, []);
  return (
    <div className="container">
      <Spin spinning={loading}>
        <Card>
          <Row gutter={[12, 24]} justify="space-between">
            <Col span={4}>
              <Avatar size={200} shape="square" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={18}>
              <Flex justify="space-between">
                <div className="left">
                  <Title>
                    Name : {profile?.first_name || "N/A"} {profile?.last_name}
                  </Title>
                  <Title level={3}>Email : {profile?.email || "N/A"}</Title>
                  <Title level={3}>
                    Date Of Birth :{" "}
                    {dayjs.unix(profile?.date_of_birth).format("DD/MM/YYYY") ||
                      "N/A"}
                  </Title>
                </div>
                <Flex vertical gap={10} justify="space-between">
                  <Button level={3} icon={<BsEye />} onClick={showDrawer}>
                    View More{" "}
                  </Button>
                  <Button level={3} icon={<BiEdit />} onClick={showModal}>
                    Edit Profile{" "}
                  </Button>
                </Flex>
              </Flex>
            </Col>
          </Row>
        </Card>
      </Spin>
      <Drawer
        title="Profile Details"
        onClose={onClose}
        open={open}
        width={"50%"}
      >
        <Flex wrap="wrap" gap={5}>
          {Object.entries(profile)?.map(([key, val]) => (
            <Card style={{ width: "30%" }}>
              <Title level={5}>{key}</Title>
              <Title level={4} style={{ color: "#003b73" }}>
                {val}
              </Title>
            </Card>
          ))}
        </Flex>
      </Drawer>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={"60%"}
        destroyOnClose
      >
        <RegisterForm user={profile} />
      </Modal>
    </div>
  );
};

export default Profile;
