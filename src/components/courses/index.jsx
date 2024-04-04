import Course from "../course";
import "./courses.scss";
const Courses = ({ courses = [], count = 3 }) => {
  return (
    <div className="coursesList">
      {courses?.courses.map(
        (course, index) => index < count && <Course course={course} />
      )}
    </div>
  );
};

export default Courses;
