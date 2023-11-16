import { React , useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../CourseNavigation";
import db from "../../Database";
import AssignmentList from "./AssignmentList";
import "./index.css";
// import "../index.css";

function Assignments() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35"/>
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="breadcrumb-link">
                {course.number}.{course._id}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Assignments</li> 
          </ol>
        </nav>
        <button className="btn mb-1 student-view">
              <BiGlassesAlt className="text me-1"/>
                Student View</button>
      </div>
      <hr className="mt-2 ms-4"/>
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3"/>
        <div className="col">
          <div className="main-content ms-2 me-2">
            <div className="row assignment-buttons ms-0">
              <div className="col-2 ps-0">
                <input type="text" className="form-control search" placeholder="Search for Assignment"/>
              </div>
              <div className="col-10 pe-4 assignment-btns">
                <button className="btn ms-1 vertical-ellipsis ps-1 float-end">
                  <HiOutlineEllipsisVertical className="text" size="20"/></button>
                <button className="btn btn-danger ms-1 add-assignment float-end">
                  <AiOutlinePlus className="text mt-0 me-2"/>
                  Assignment</button>
                <button className="btn ms-1 add-group float-end">
                  <AiOutlinePlus className="text mt-0 me-2"/>
                  Group</button>
              </div>
            </div>
            <hr/>
            <AssignmentList className="assignment-content"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;
