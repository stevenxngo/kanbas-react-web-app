import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import "../index.css";
import "./CourseCard.css";

const CourseCard = ({
  course = {
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  },
  setCourse,
  deleteCourse,
}) => {
  return (
    <Link
      to={`/Kanbas/Courses/${course._id}`}
      className="card-link-no-decoration me-4"
    >
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-img-top course-solid-blue course-img-height-125px d-flex flex-row">
            <button
              type="button"
              className="btn position-absolute top-0 end-0 right-0 m-2 course-card-img-button-white"
            >
              <FaEllipsisV />
            </button>
          </div>
          <div className="card-body ">
            <div
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="mb-2 card-link"
            >
              <div className="course-card-header-content-container">
                <h6 className="card-title ellipsis">{course.name}</h6>
                <h5 className="card-subtitle mb-2 text-muted">
                  {course.number}
                </h5>
                <p className="card-text ellipsis">
                  {course.startDate} to {course.endDate}
                </p>
              </div>
            </div>
            <div
              key={course.number}
              to={"/Kanbas/Dashboard"}
              className="course-card-icon-grey"
            >

              <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
                className="btn btn-light"
              >
                <TfiWrite className="text mb-1 me-2" size="20" />
                Edit
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
                className="btn btn-danger float-end"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
