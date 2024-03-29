import styles from "./Manifesto.module.css";

function Manifesto() {
  return (
    <div className="container-fluid p-5">
      <h1 className="text-success">
        Our <span className="text-warning">Philosophy</span>
      </h1>
      <p className="text-warning">
        Journey to Enlightenment Unraveling the Spiritual Tapestry of Islamic
        Philosophy.
      </p>
      <div className="row mt-5 py-5 row-gap-5">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img src="/islamic/quran.png" alt="" className="card-img-top" />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Online Learning</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img
                src="/islamic/sprituality.png"
                alt=""
                className="card-img-top"
              />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Spirituality</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img src="/islamic/nemaz.png" alt="" className="card-img-top" />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Service</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img src="/islamic/masjid.png" alt="" className="card-img-top" />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Community</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img
                src="/islamic/certification.png"
                alt=""
                className="card-img-top"
              />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Certificate</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className={`${styles.manifestoCard} card text-success pt-5`}>
            <span
              className={`${styles.maniLogo} card-img-top border border-warning rounded-circle bg-white`}
            >
              <img src="/islamic/globe.png" alt="" className="card-img-top" />
            </span>
            <div className="card-body d-flex justify-content-center  flex-column gap-2">
              <h5 className="card-title">Learn from Anywhere Anytime</h5>
              <p className="card-text">
                Quran Facility refers to the memorization and recitation of the
                Quran, which is the holy scripture of Islam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
