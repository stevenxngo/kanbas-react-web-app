import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../../Kanbas/Database";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="course-nav ms-4">
      <div className="course-name">
                {course.number} {course.name} {course.startDate}
            </div>
      <div className="list-group">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseNavigation;
