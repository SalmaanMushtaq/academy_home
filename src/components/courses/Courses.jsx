import styles from "./Courses.module.css";

function Courses() {
  return (
    <div
      className={`container-fluid ${styles.courseContainer} p-5 pb-0 postion-relative`}
    >
      <div className="row">
        <div className="col-md-8 d-flex align-items-center position-relative">
          <div className={`left ${styles.content} mb-5 pb-5`}>
            <h1 className="text-success">Gaining </h1>
            <h1 className="text-success">Knowledge is an </h1>
            <h1 className="text-warning">Active Part of Faith</h1>
            <p className="text-warning">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className={`btn btn-success ${styles.courseBtn}`}>
              Courses
            </button>
          </div>
          <img
            src="/course_images/bottom.png"
            alt="image3"
            className={`${styles.image3}`}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className={`${styles.imageContainer}`}>
            <img
              src="/images/first.png"
              alt="image here"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Top left image */}
      <img
        src="/course_images/left.png"
        alt="image1"
        className={`${styles.image1}`}
      />
      {/* Top right image */}
      <img
        src="/course_images/right.png"
        alt="image2"
        className={`${styles.image2}`}
      />
      {/* Middle image */}
      <img
        src="/course_images/middle.png"
        alt="image4"
        className={`${styles.image4}`}
      />
    </div>
  );
}

export default Courses;
