import styles from "./CourseOffered.module.css";
function CourseOffered() {
  return (
    <div className="container-fluid p-5 bg-white">
      <h1 className="text-success">
        Courses <span className="text-warning">Offered</span>
      </h1>
      <p className="text-warning">
        Your best source of knowledge about skills and Islamic values.
      </p>
      <div className="row mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-success course_card">
            <img
              src="/images/Teacher.png"
              className={styles.card_img_top}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center align-items-center flex-column gap-2">
              <h5 className="card-title">Arabic Teaching</h5>
              <p className="card-text course_card_text">
                Unlock the Beauty and Wisdom of the Quran
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-success course_card">
            <img
              src="/images/Childs.png"
              className={styles.card_img_top}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center align-items-center flex-column p-4">
              <h5 className="card-title">Quranic Studies</h5>
              <p className="card-text course_card_text">
                Unlock the Beauty and Wisdom of the Quran
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-success course_card">
            <img
              src="/images/Library.png"
              className={styles.card_img_top}
              alt="..."
            />
            <div className="card-body d-flex justify-content-center align-items-center flex-column p-4">
              <h5 className="card-title">Islamic Studies</h5>
              <p className="card-text course_card_text">
                Unlock the Beauty and Wisdom of the Quran
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-5 text-success islamicPillar">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <span className="rounded-circle border border-warning">
            <img src="/images/Qalima.png" alt="" className="islamicPillarImg" />
          </span>
          <h5 className="my-3">Swam</h5>
          <p>
            To Believe in no God but Allah and that Muhammad is his prophet.
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <span className="rounded-circle border border-warning">
            <img src="/images/prayer.png" alt="" className="islamicPillarImg" />
          </span>
          <h5 className="my-3">Nemaaz</h5>
          <p>
            To Believe in no God but Allah and that Muhammad is his prophet.
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <span className="rounded-circle border border-warning">
            <img src="/images/roza.png" alt="" className="islamicPillarImg" />
          </span>
          <h5 className="my-3">Ramadan</h5>
          <p>
            To Believe in no God but Allah and that Muhammad is his prophet.
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <span className="rounded-circle border border-warning">
            <img src="/images/zakat.png" alt="" className="islamicPillarImg" />
          </span>
          <h5 className="my-3">Zakkat</h5>
          <p>
            To Believe in no God but Allah and that Muhammad is his prophet.
          </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <span className="rounded-circle border border-warning">
            <img src="/images/hajj.png" alt="" className="islamicPillarImg" />
          </span>
          <h5 className="my-3">Hajj</h5>
          <p>
            To Believe in no God but Allah and that Muhammad is his prophet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseOffered;
