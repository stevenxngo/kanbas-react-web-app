import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  // const { courseId } = useParams();
  // const assignments = db.assignments;
  // const dispatch = useDispatch();

  // const handleDeleteAssignment = (assignmentId) => {
  //   client.deleteAssignment(assignmentId).then((status) => {
  //     dispatch(deleteAssignment(assignmentId));
  //   });
  // };

  // useEffect(() => {
  //   client
  //     .findAssignmentsForCourse(courseId)
  //     .then((assignments) => dispatch(setAssignments(assignments)));
  // }, [courseId]);

  const { courseId } = useParams();
    const navigate = useNavigate();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    const [selectedAssignment, setSelectedAssignment] = useState({title: ''});
    const formatDate = (dateStr) => {
        const date = new Date(dateStr.replace(/-/g, '/'));
        const options = { month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
    // const newAssignment = {
    //     title: "New Assignment", 
    //     description: "New Assignment Description",
    //     dueDate: "2023-09-18",
    //     availableFromDate: "2023-09-11",
    //     availableUntilDate: "2023-09-18"
    // }

    const [assignmentTitle, setAssignmentTitle] = useState("");
    const [assignmentDescription, setAssignmentDescription] = useState("");

    const getAssignmentTitle = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}/title`
        );
        setAssignmentTitle(response.data);
    }

    const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
          dispatch(deleteAssignment(assignmentId));
        });
    };

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
          .then((assignments) =>
            dispatch(setAssignments(assignments))
        );
    }, [courseId]);

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
              <VscGripper className="text me-2" size="20" />
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="assignment-link"
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
            </li>
          ))}
      </div>
    </div>
  );
}
export default AssignmentList;
