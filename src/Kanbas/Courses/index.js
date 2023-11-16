import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { React, useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses({ courses }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  // const URL = "http://localhost:4000/api/courses";
  const URL = `${API_BASE}/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
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
