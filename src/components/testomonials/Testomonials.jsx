import { FaStar } from "react-icons/fa";
import styles from "./Testomonials.module.css";
function Testimonials() {
  return (
    <div className="container-fluid p-5">
      <h2>Testimonials</h2>
      <div className="row mt-5">
        <div className="col-lg-6 mb-4">
          <div className={`card ${styles.testomonial_card}`}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="/images/testomonial1.jpg"
                    alt="Testimonial 1"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <div className="text-end">
                    <div className={`${styles.star_rating}`}>
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                    </div>
                    <h6>Ali Hammam</h6>
                    <small>Student</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className={`card ${styles.testomonial_card}`}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="/images/testomonial2.jpg"
                    alt="Testimonial 1"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                  <div className="text-end">
                    <div className={`${styles.star_rating}`}>
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                      <FaStar className={`${styles.star_icon}`} />
                    </div>
                    <h6>Ali Hammam</h6>
                    <small>Student</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
