import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import "./index.css";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses({ courses }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const URL = `${API_BASE}/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();
  const currentURL = location.pathname;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];

  return (
    <div>
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35" />
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="breadcrumb-link"
              >
                {course.number}.{course._id}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              { lastSegment }
            </li>
          </ol>
        </nav>
        <button className="btn mb-1 student-view">
          <BiGlassesAlt className="text me-1" />
          Student View
        </button>
      </div>
      <hr className="mt-2 ms-4"/>
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignment />} />
        <Route
          path="Assignments/:assignmentId"
          element={<AssignmentEditor />}
        />
        <Route path="Grades" element={<h1>Grades</h1>} />
      </Routes>
    </div>
  );
}
export default Courses;
