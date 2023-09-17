const courseStatus = ["All", "Active", "Completed", "Upcoming"];
function Header() {
  return (
    <div>
      <h1>Course list (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div className="active" key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
