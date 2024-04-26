import React from "react";
import { useAuth } from "../../../core/store/authContext";
import { Button, Carousel, Typography } from "antd";
import SliderImages from "./Slider";
import featureCourses from "../../../data.json";
import "./home.scss";
import Courses from "../../../components/courses";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { Title } = Typography;
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div className="toplayer">
        <div className="topContent">
          <h1 className="heading">Professional and Lifelong Learning</h1>
          <h2 className="subheading">In-person, blended, and online courses</h2>
          <div className="actionBtns">
            <Button
              className="actionBtn"
              onClick={() => navigate("/courses", { replace: true })}
            >
              All Courses
            </Button>
            <Button className="actionBtn" onClick={() => navigate("/courses")}>
              Online Courses
            </Button>
            <Button className="actionBtn" onClick={() => navigate("/courses")}>
              Free Courses
            </Button>
          </div>
        </div>
        <SliderImages />
      </div>
      <div className="ContentSection">
        <h1 className="feature subheading">Featured Courses</h1>
        <div style={{ textAlign: "center" }}>
          <Courses />
        </div>
        <h1 className="feature subheading">Trending Courses</h1>
        {/* <Carousel autoplay>
          <Courses courses={featureCourses} />
          <Courses courses={featureCourses} />
          <Courses courses={featureCourses} />
        </Carousel> */}
      </div>
      <div></div>
    </div>
  );
};

export default Home;
