import React, { useEffect, useState } from "react";
import { getCourses, getRegisterCourses } from "../../../core/apis";
import { useAuth } from "../../../core/store/authContext";
import { List } from "antd";

const Registrations = () => {
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

  useEffect(() => {
    getCoursesFun();
  }, []);
  return (
    <div>
      Registrations
      {courses?.map((course) => (
        <div>{course?.name}</div>
      ))}
    </div>
  );
};

export default Registrations;
