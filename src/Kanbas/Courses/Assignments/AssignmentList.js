import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import * as client from "./client";
import "../index.css";
import "./index.css";

function AssignmentList() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  useEffect(() => {
    client
      .findAssignmentsForCourse(courseId)
      .then((assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr.replace(/-/g, "/"));
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <div className="list-group mt-4 assignments">
        <li className="list-group-item list-group-item-header assignments-title assignment-li">
          <VscGripper className="text me-1" size="20" />
          <BiCaretDown className="text me-2" size="10" />
          ASSIGNMENTS
          <div className="float-end">
            <AiOutlinePlus className="text  ms-2 float-right" size="15" />
            <HiOutlineEllipsisVertical
              className="text ms-1 me-0 float-right"
              size="25"
            />
          </div>
        </li>
        {courseAssignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment, index) => (
            <li
              key={index}
              className="list-group-item border-left-active assignment-li"
            >
              <div>
                <VscGripper className="text me-2" size="20" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="assignment-link assignment-header assignment-item-title ms-1"
                  onClick={() => dispatch(setAssignment(assignment))}
                >
                  {assignment.title}
                </Link>
                <div className="float-end">
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to remove this assignment?"
                        )
                      ) {
                        handleDeleteAssignment(assignment._id);
                      }
                    }}
                    className="btn btn-danger me-2 p-1 font-small float-right"
                  >
                    Delete
                  </button>
                  <HiOutlineEllipsisVertical
                    className="text ms-1 me-0  float-right"
                    size="25"
                  />
                  <AiFillCheckCircle
                    className="text published float-right"
                    size="20"
                  />
                </div>
                <div className="row ms-1 assignment-description">
                  {assignment.description}
                </div>
                <div className="row ms-1 assignment-description">
                  Due {formatDate(assignment.dueDate)} at 11:59pm | 100 pts
                </div>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
}
export default AssignmentList;
