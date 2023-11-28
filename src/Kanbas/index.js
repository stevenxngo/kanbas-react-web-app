import { React, useState, useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import "./index.css";
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {

  const [courses, setCourses] = useState([]);
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  const [course, setCourse] = useState({
    name: "Name",
    number: "Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([...courses, response.data ]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${course.id}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
