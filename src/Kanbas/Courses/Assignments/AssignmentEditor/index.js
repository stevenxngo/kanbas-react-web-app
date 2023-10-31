import db from "../../../../Kanbas/Database";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../../CourseNavigation";
import "../../index.css";
import "../index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="courses">
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35" />
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="breadcrumb-link"
              >
                {course.number}.{course._id}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}/Assignments`}
                className="breadcrumb-link "
              >
                Assignments
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {assignment.title}
            </li>
          </ol>
        </nav>
      </div>
      <hr className="mt-2 ms-4" />
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3" />
        <div className="col">
          <div className="edit-content ms-2">
            <div className="row pe-4">
              <div className="pt-2 publish-status published">
                <AiFillCheckCircle className="text me-2" size="20" />
                Published
              </div>
              <button className="btn ms-1 vertical-ellipsis ps-1">
                <HiOutlineEllipsisVertical className="text" size="20" />
              </button>
            </div>
            <hr />
            Assignment Name:
            <input value={assignment.title} className="form-control mb-2" />
            <hr />
            <div className="float-end">
              <button
                onClick={handleSave}
                className="btn btn-danger ms-2 pe-2 float-right"
              >
                Save
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light cancel-button ms-2"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
