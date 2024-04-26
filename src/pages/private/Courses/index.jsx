import React, { useEffect, useState } from "react";
import { Avatar, Collapse, List, Space, Spin, message } from "antd";
import { FaRegStar, FaRegCommentDots } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { RegisterModuleAPI, getCourses } from "../../../core/apis";
import { useAuth } from "../../../core/store/authContext";

const MakeModule = (mod) => {
  const data = mod?.map((module, i) => ({
    key: module?.id,
    isRegister: module?.isRegister || false,
    href: "https://ant.design",
    title: `Module Name:  ${module?.name} (${module?.availability})`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: (
      <div>
        <p>code: {module?.code}</p>
        <p>credit hours: {module?.credit}</p>
      </div>
    ),
    content: module?.description,
  }));
  return data;
};

const Courses = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCoursesFun = async () => {
    setLoading(true);
    try {
      const res = await getCourses();
      if (res?.status < 400) {
        console.log(res?.data);
        setCourses(res?.data?.results);
      } else {
        message.error("something wrong");
      }
      setLoading(false);
    } catch (error) {
      console.log(error, "ERR Profile");
      setLoading(false);
    }
  };

  const handleRegister = (item) => {
    console.log("inn", item);
    try {
      if (item?.key && !item?.isRegister) {
        const res = RegisterModuleAPI({
          module: item?.key,
          student: user?.token?.user_id,
        });
        if (res?.status < 400) {
          message?.success("Module Registered Successfully");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoursesFun();
  }, []);
  if (loading)
    return (
      <Spin
        spinning={loading}
        style={{ marginLeft: "50%", marginTop: "10px" }}
      />
    );

  const modules = courses?.map((mod) => {
    return {
      key: mod?.id,
      label: `Course Name: ${mod?.name}`,
      children: (
        <List
          key={mod?.id}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={MakeModule(mod?.modules)}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={(item) => (
            <List.Item
              key={item?.title}
              actions={[
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    cursor: "pointer",
                  }}
                  key={item?.id}
                  onClick={() => handleRegister(item)}
                >
                  <MdStar
                    size={20}
                    color={item?.isRegister ? "#ee9626" : "grey"}
                    enableBackground={true}
                  />
                  {item?.isRegister ? "Enrolled" : "Register "}
                </div>,
                <SlLike icon={SlLike} text="156" key="list-vertical-like-o" />,
                <FaRegCommentDots
                  icon={FaRegCommentDots}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      ),
    };
  });
  const first_course = courses[0]?.id;
  return (
    <div style={{ height: "92vh", overflow: "auto", padding: "10px 20px" }}>
      <h1 style={{ padding: "0px 0px 10px 0px" }}>Course Modules</h1>
      <Collapse items={modules} defaultActiveKey={[first_course]} />
    </div>
  );
};

export default Courses;
