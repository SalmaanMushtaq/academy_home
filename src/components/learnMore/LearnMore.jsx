import styles from "./LearnMore.module.css";

function LearnMore() {
  return (
    <div className={`container-fluid px-5 ${styles.learnMoreContainer}`}>
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex flex-column position-relative">
          <div>
            <img
              src="/images/Namaz.png"
              alt="image here"
              className="img-fluid pb-5 float-end"
              style={{ height: "500px", width: "400px", marginTop: "-15%" }}
            />
          </div>
          <div>
            <h1 className="text-success">Blossoming in the Garden </h1>
            <h1 className="text-warning">of Islamic Knowledge</h1>
            <p className="text-warning">ETHICAL & MORAL BELIEFS THAT GUIDES</p>
            <button className={`btn btn-success ${styles.learnMoreBtn}`}>
              Learn more
            </button>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 py-5 px-5">
          <img
            src="images/bismillah.png"
            alt="bismillah"
            className="mt-5 py-4"
          />
          <p className="text-success fs-6 text-wrap mt-4">
            The is not just a institute for prayers rather it is a community
            center for all. The Center is committed to preserving an Islamic
            identity, building and supporting a viable Muslim community,
            promoting a compre-hensive Islamic way of life based on the Holy
            Quran and the Sunnah of Prophet Muhammad S.A.W
          </p>
          <img
            src="/images/Namaz2.png"
            alt="image here"
            className="img-fluid mt-5"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
