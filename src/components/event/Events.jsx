import styles from "./Events.module.css";

function Events() {
  return (
    <div className="container-fluid p-5 bg-white">
      <div className="row  justify-content-around">
        <div className="col-md-6">
          <img src="/images/event.png" alt="" className="img-fluid" />
        </div>
        <div className="col-md-5 mt-5 ms-md-5">
          <div className="row">
            <p>
              <strong className="fs-4">Events</strong>
              <small className="float-end text-muted">See all</small>
            </p>
            <p>
              The is not just a institute for prayers rather it is a community
              center for all. The Center is committed to preserving an Islamic
              identity, building and supporting a viable Muslim community,
              promoting a comprehensive Islamic way of life based on the Holy
              Quran and the Sunnah of Prophet Muhammad S.A.W
            </p>
          </div>
          <div className="row border border-warning p-2">
            <div className="col-2">
              <h3 className="text-center">MAR 04</h3>
            </div>
            <div className="col-10">
              <h3>Ramadan Workshop</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur. Hac.
              </p>
              <p>10:00 Pm - 4:00 Am</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas netus tristique
                urna sem ipsum volutpat. Vitae.
              </p>
              <p
                className={`pb-3 fs-5 border-bottom-0 p-3 border border-top-1 border-start-0 border-end-0 ${styles.eventDetails}`}
              >
                View Event Details &rarr;
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h2>
            Alhamdulillah
            <span className="base_color"> We Have Reached Over</span>
          </h2>
          <div className="row mt-4 mb-3 g-sm-3 g-md-3">
            <div className="col-md-3 mb-3 mb-sm-0">
              <div className={`card ${styles.globalCard}`}>
                <div className="card-body text-center">
                  <p className={`fs-4 card-title ${styles.centeredText}`}>
                    Students
                  </p>
                  <strong className="card-text fs-4">20K+</strong>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-sm-0">
              <div className={`card ${styles.globalCard}`}>
                <div className="card-body text-center">
                  <p className={`fs-4 card-title ${styles.centeredText}`}>
                    Instructors
                  </p>
                  <strong className="card-text fs-4">20+</strong>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-sm-0">
              <div className={`card ${styles.globalCard}`}>
                <div className="card-body text-center">
                  <p className={`fs-4 card-title ${styles.centeredText}`}>
                    Courses
                  </p>
                  <strong className="card-text fs-4">18++</strong>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-sm-0">
              <div className={`card ${styles.globalCard}`}>
                <div className="card-body text-center">
                  <p className={`fs-4 card-title ${styles.centeredText}`}>
                    Positive Reviews
                  </p>
                  <strong className="card-text fs-4">5K+</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
