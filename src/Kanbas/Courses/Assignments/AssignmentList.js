import React from "react";
import { Link, useParams } from "react-router-dom";
import { VscGripper } from "react-icons/vsc";
import { BiCaretDown } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import db from "../../Database";
import "../index.css"; 
import "./index.css";

function AssignmentList() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <div className="list-group mt-4 assignments">
        <li className="list-group-item list-group-item-header assignments-title assignment-li">
          <VscGripper className="text me-1" size="20"/>
          <BiCaretDown className="text me-2" size="10"/>
          ASSIGNMENTS
          <div className="float-end">
          <AiOutlinePlus className="text  ms-2 float-right" size="15"/>
          <HiOutlineEllipsisVertical className="text ms-1 me-0 float-right" size="25"/>
          </div>
        </li>
        {assignments
          .filter((assignment) => assignment.course === courseId)
          .map((assignment, index) => (
              <li className="list-group-item border-left-active assignment-li">
                <VscGripper className="text me-2" size="20"/>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="assignment-link">{assignment.title}</Link>
                <HiOutlineEllipsisVertical className="text ms-1 me-0 float-right" size="25"/>
                <AiFillCheckCircle className="text published float-right" size="20"/>
              </li>
        ))}
      </div>
    </div>
  );
}
export default AssignmentList;