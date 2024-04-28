import { Avatar, Card } from "antd";
const { Meta } = Card;
import { CiStopwatch } from "react-icons/ci";
const Course = ({ course }) => {
  return (
    <Card
      hoverable
      className="course"
      key={course.id}
      cover={
        <img
          src={course.image}
          alt={course.name}
          style={{ aspectRatio: "auto", height: "200px" }}
        />
      }
    >
      <Meta title={course.name} description={course.description} />
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title="instructor"
        description={course.instructor}
      />
      <Meta avatar={<CiStopwatch size={30} />} title="duration" description={course.duration} />
    </Card>
  );
};

export default Course;
