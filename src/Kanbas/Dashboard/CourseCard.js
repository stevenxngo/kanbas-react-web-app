import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import "../index.css"
import "./CourseCard.css"

const CourseCard = ({
    course = {
        _id: "",
        name: "",
        number: "",
        startDate: "",
        endDate: "",
    }
}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-img-top course-solid-blue course-img-height-125px d-flex flex-row">
                    <button type="button"
                        className="btn position-absolute top-0 end-0 right-0 m-2 course-card-img-button-white">
                        <FaEllipsisV />
                    </button>
                </div>
                <div className="card-body d-flex flex-column">
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link card-link-no-decoration">
                        <div className="course-card-header-content-container">
                            <h6 className="card-title ellipsis">
                                {course.name}
                            </h6>
                            <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                            <p className="card-text ellipsis">
                                {course.startDate} to {course.endDate}
                            </p>
                        </div>
                    </Link>
                    <Link key={course.number} to={"/Kanbas/Dashboard"} class="course-card-icon-grey">
                        <PiNotePencil />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;