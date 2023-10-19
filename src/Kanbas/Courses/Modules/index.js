import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import ModuleList from "./ModuleList";
import "./index.css";

function Modules() {
  return (
    <div className="modules ms-2">
      <div className="row ms-0 module-btns">
        <button className="btn ms-2 collapse-all">
          Collapse All</button>
        <button className="btn ms-2 view-progress">
          View Progress</button>
        <select className="form-select ms-2 dropdown-option">
          <option selected value="PUBLISH-ALL">
            Publish All</option></select>
        <button className="btn btn-danger ms-2 add-module">
          <AiOutlinePlus className="mt-0 me-2"/>
          Module</button>
        <button className="btn ms-2 vertical-ellipsis ps-1">
          <HiOutlineEllipsisVertical className="text" size="20"/></button>
      </div>
      <hr/>
      <ModuleList/>
    </div>
  );
}
export default Modules;