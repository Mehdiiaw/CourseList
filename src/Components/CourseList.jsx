import React from "react";

const CourseList = () => {
  return (
    <div className="course-list">
      <div className="course-item">
        <div className="course-item__img">
          <img src="/images/img1.jpg" alt="first-img" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">first React Course Practies</p>
              <p className="desc">this is a new practice of react course</p>
            </div>
            <span className="rate">4.5</span>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge badge--secondary">langauges</span>
              <span className="badge badge--secondary">front-end</span>
            </div>
            <div className="caption">
              <div className="date">
                <span>
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span className="badge badge--danger">UnCompleted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
