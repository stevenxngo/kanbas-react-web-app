import { React } from "react";
import CourseCard from "./CourseCard";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="ms-4">
      <h1 className="ms-2">Dashboard</h1>
      <hr />
      <div className="ms-3 main-dashboard">
        <h2>Published Courses ({courses.length})</h2>
        <hr />

        <div className="edit-dashboard ms-2">
          <h5>Edit Dashboard</h5>
          <input
            value={course.name}
            className="form-control"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            placeholder="Course Number"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button onClick={addNewCourse} className="btn btn-success mt-2">
            Add
          </button>
          <button onClick={updateCourse} className="btn btn-primary mt-2 ms-2">
            Update
          </button>
        </div>

        <div className="list-group course-cards-container ms-2 mb-4">
          {courses.map((course) => {
            return (
              <CourseCard
                course={course}
                setCourse={setCourse}
                deleteCourse={deleteCourse}
                className="list-group-item"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
