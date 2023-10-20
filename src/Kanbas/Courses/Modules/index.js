import db from "../../../Kanbas/Database";
import { Link, useParams } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiGlassesAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../CourseNavigation";
import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Modules() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="courses">
      <div className="row mt-3 ms-0">
        <HiOutlineBars3 className="text icon ms-3 col-1" size="35"/>
        <nav aria-label="breadcrumb" className="mb-0 col-9">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="breadcrumb-link">
                {course.number}.{course._id}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Modules</li> 
          </ol>
        </nav>
        <button class="btn mb-1 student-view">
            <BiGlassesAlt className="text me-1"/>
              Student View</button>
      </div>
      <hr className="mt-2 ms-4"/>
      <div className="row mt-4 ms-1">
        <CourseNavigation className="col-3"/>
        <div className="col-8">
          <div className="modules module-btns ms-2">
            <div className="row ms-0">
              <button className="btn ms-1 collapse-all">
                Collapse All</button>
              <button className="btn ms-1 view-progress">
                View Progress</button>
              <select className="form-select ms-1 dropdown-option">
                <option selected value="PUBLISH-ALL">
                  Publish All</option></select>
              <button className="btn btn-danger ms-1 add-module">
                <AiOutlinePlus className="mt-0 me-2"/>
                Module</button>
              <button className="btn ms-1 vertical-ellipsis ps-1">
                <HiOutlineEllipsisVertical className="text" size="20"/></button>
            </div>
            <hr/>
            <ModuleList/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modules;