import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import CourseNavigation from "../CourseNavigation";
import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Modules() {
  return (
    <div className="row mt-4 ms-1">
      <CourseNavigation className="col-3" />
      <div className="col">
        <div className="modules module-btns ms-2">
          <div className="row ms-0">
            <button className="btn ms-1 collapse-all">Collapse All</button>
            <button className="btn ms-1 view-progress">View Progress</button>
            <select className="form-select ms-1 dropdown-option">
              <option defaultValue={"PUBLISH-ALL"} value="PUBLISH-ALL">
                Publish All
              </option>
            </select>
            <button className="btn btn-danger ms-1 add-module">
              <AiOutlinePlus className="mt-0 me-2" />
              Module
            </button>
            <button className="btn ms-1 vertical-ellipsis ps-1">
              <HiOutlineEllipsisVertical className="text" size="20" />
            </button>
          </div>
          <hr />
          {/* <ModuleList/> */}
        </div>
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;
