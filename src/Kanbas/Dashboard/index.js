import CourseCard from "./CourseCard";
import db from "../Database";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-4 flex-grow-1">
      <h1 className="ms-2">Dashboard</h1>
      <hr />
      <div className="ms-md-3">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div
          className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 
        justify-content-start course-cards-container"
        >
          {courses.map((course) => {
            return <CourseCard course={course} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
