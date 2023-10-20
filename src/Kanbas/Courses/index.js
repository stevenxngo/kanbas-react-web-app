import { Navigate, Route, Routes } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignment from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css";

function Courses() {
  // const { courseId } = useParams();
  return (
    <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>}/>
            <Route path="Assignments" element={<Assignment/>}/>
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>}/>
          </Routes>
    </div>
  );
}
export default Courses;
