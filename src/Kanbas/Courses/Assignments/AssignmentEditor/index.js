import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../../CourseNavigation";
import { useState } from "react";
import {
  setAssignment,
  addAssignment,
  updateAssignment,
} from "../assignmentsReducer";
import * as client from "../client";
import "../index.css";

function AssignmentEditor() {
  // const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );
  // const { courseId } = useParams();
  // const course = db.courses.find((course) => course._id === courseId);
  // const navigate = useNavigate();
  // const handleSave = () => {
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };

  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const foundAssignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const navigate = useNavigate();
  const handleSave = () => {
    foundAssignment ? handleUpdateAssignment() : handleAddAssignment();
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const [assignmentTitle, setAssignmentTitle] = useState(assignment.title);
  const [assignmentDescription, setAssignmentDescription] = useState(
    assignment.description
  );
  const [assignmentDue, setAssignmentDue] = useState(assignment.dueDate);
  const [availableFrom, setAvailableFrom] = useState(
    assignment.availableFromDate
  );
  const [availableTo, setAvailableTo] = useState(assignment.availableUntilDate);

  return (
    <div className="row mt-4 ms-1">
      <CourseNavigation className="col-3" />
      <div className="col">
        <div className="edit-content ms-2 me-2">
          <div className="row float-right pe-4">
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
          <input
            value={assignmentTitle}
            className="form-control mb-2"
            onChange={(e) => {
              setAssignmentTitle(e.target.value);
              dispatch(setAssignment({ ...assignment, title: e.target.value }));
            }}
          />
          <textarea
            className="form-control mt-4"
            value={assignmentDescription}
            placeholder="Insert description"
            onChange={(e) => {
              setAssignmentDescription(e.target.value);
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              );
            }}
          ></textarea>
          <div className="row mt-4">
            <div className="col-3 pe-0">
              <label for="points" className="me-2 float-end">
                Points
              </label>
            </div>
            <div className="col mb-0">
              <input
                type="text"
                className="form-control edit-input"
                id="points"
                name="points"
                value="100"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3 pe-0">
              <label className="me-2 float-end">Assign</label>
            </div>
            <div className="col mb-0">
              <div className="mb-2 bold-text edit-input">
                <label for="due-date">Due</label>
                <input
                  type="date"
                  id="due-date"
                  name="due-date"
                  className="form-control"
                  value={assignmentDue}
                  onChange={(e) => {
                    setAssignmentDue(e.target.value);
                    dispatch(
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    );
                  }}
                />
              </div>
              <div className="mb-2 bold-text edit-input">
                <label for="available-from">Available From</label>
                <input
                  type="date"
                  id="available-from"
                  name="available-from"
                  className="form-control"
                  value={availableFrom}
                  onChange={(e) => {
                    setAvailableFrom(e.target.value);
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableFromDate: e.target.value,
                      })
                    );
                  }}
                />
              </div>
              <div className="mb-2 bold-text edit-input">
                <label for="available-to">Available To</label>
                <input
                  type="date"
                  id="available-to"
                  name="available-to"
                  className="form-control"
                  value={availableTo}
                  onChange={(e) => {
                    setAvailableTo(e.target.value);
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableUntilDate: e.target.value,
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>
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
  );
}
export default AssignmentEditor;
