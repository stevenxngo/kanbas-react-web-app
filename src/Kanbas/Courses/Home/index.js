import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TbFileImport } from "react-icons/tb";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaRegLifeRing } from "react-icons/fa6";
import { RiBarChart2Fill } from "react-icons/ri";
import { RiMegaphoneLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import CourseNavigation from "../CourseNavigation";
import ModuleList from "../Modules/ModuleList";
import "../Modules/index.css";
import "./index.css";

function Home() {
  return (
    <div className="row mt-4 ms-1">
      <CourseNavigation className="col-3" />
      <div className="col-8">
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
          <ModuleList />
        </div>
      </div>
      <div className="col  side-btns">
        <button className="btn side-button mb-1">
          <TbFileImport className="text me-1" />
          Import Existing Content
        </button>
        <button className="btn side-button mb-1">
          <FiArrowRightCircle className="text me-1" />
          Import from Commons
        </button>
        <button className="btn side-button mb-1">
          <FaRegLifeRing className="text me-1" />
          Choose Home Page
        </button>
        <button className="btn side-button mb-1">
          <RiBarChart2Fill className="text me-1" />
          View Course Stream
        </button>
        <button className="btn side-button mb-1">
          <RiMegaphoneLine className="text me-1" />
          New Announcement
        </button>
        <button className="btn side-button mb-1">
          <RiBarChart2Fill className="text me-1" />
          New Analytics
        </button>
        <button className="btn side-button mb-1">
          <BsBell className="text me-1" />
          View Course Notifications
        </button>
        <h5 className="mt-3">To Do</h5>
        <hr className="mt-0 mb-1" />
        {/* <ModuleList /> */}
      </div>
    </div>
  );
}
export default Home;
