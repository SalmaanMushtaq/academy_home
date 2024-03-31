import styles from "./LearnMore.module.css";

function LearnMore() {
  return (
    <div className="container-fluid pb-5 px-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex align-items-end justify-content-end">
          <div className={`float-end ${styles.imageContainer}`}>
            <img
              src="/images/namaaz1.png"
              alt="image here"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 py-4">
          {/* <div > */}
          <img src="islamic/bism-img.png" alt="" />
          <p className="text-success m-0 mb-0 fs-6 text-wrap mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            distinctio, eos eius quod debitis nobis. Incidunt eum cumque, illum
            veritatis ad, laudantium unde nesciunt quae ratione ab illo corrupti
            iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maxime, veritatis. illum veritatis ad, laudantium unde nesciunt quae
            ratione ab illo corrupti iste. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Maxime, veritatis. sit amet
            consectetur adipisicing elit. Maxime, veritatis.
          </p>
          {/* </div> */}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 col-sm-12 d-flex align-items-center">
          <div className="right">
            <h1 className="text-success">Blossoming in the Garden </h1>
            <h1 className="text-warning">of Islamic Knowledge</h1>
            <p className="text-warning">ETHICAL & MORAL BELIEFS THAT GUIDES</p>
            <button className={`btn btn-success ${styles.learnMoreBtn}`}>
              Learn more
            </button>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex align-items-center justify-content-end">
          <div className="leftImg">
            <img
              src="/images/namaaz2.png"
              alt="image here"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
