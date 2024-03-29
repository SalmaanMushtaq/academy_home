import styles from "./Courses.module.css";

function Courses() {
  return (
    <div className={`container-fluid ${styles.courseContainer} p-5`}>
      <div className="row">
        <div className="col-md-8 d-flex align-items-center">
          <div className={`left ${styles.content}`}>
            <h1 className="text-success">Gaining </h1>
            <h1 className="text-success">Knowledge is an </h1>
            <h1 className="text-warning">Active Part of Faith</h1>
            <p className="text-warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn btn-success px-5 fs-6">Courses</button>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className={`right ${styles.imageContainer}`}>
            <img
              src="/images/first.png"
              alt="image here"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
