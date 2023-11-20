import { React, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../CourseNavigation";
import AssignmentList from "./AssignmentList";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as client from "./client";
import {
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import "./index.css";
// import "../index.css";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newAssignment = {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: "2023-09-18",
    availableFromDate: "2023-09-11",
    availableUntilDate: "2023-09-18",
  };

  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);
  return (
    <div className="row mt-4 ms-1">
      <CourseNavigation className="col-3" />
      <div className="col">
        <div className="main-content ms-2 me-2">
          <div className="row assignment-buttons ms-0">
            <div className="col-2 ps-0">
              <input
                type="text"
                className="form-control search"
                placeholder="Search for Assignment"
              />
            </div>
            <div className="col-10 pe-4 assignment-btns">
              <button className="btn ms-1 vertical-ellipsis ps-1 float-end">
                <HiOutlineEllipsisVertical className="text" size="20" />
              </button>
              <button
                className="btn btn-danger ms-1 add-assignment float-end"
                onClick={() => {
                  const id = new Date().getTime().toString();
                  navigate(`/Kanbas/Courses/${courseId}/Assignments/${id}`);
                  dispatch(
                    setAssignment({
                      ...newAssignment,
                      course: courseId,
                      _id: id,
                    })
                  );
                }}
              >
                <AiOutlinePlus className="text mt-0 me-2" />
                Assignment
              </button>
              <button className="btn ms-1 add-group float-end">
                <AiOutlinePlus className="text mt-0 me-2" />
                Group
              </button>
            </div>
          </div>
          <hr />
          <AssignmentList className="assignment-content" />
        </div>
      </div>
    </div>
  );
}
export default Assignments;
