import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={`container-fluid p-5 ${styles.footer}`}>
      <div
        className={`row justify-content-center align-items-center w-100 m-auto ${styles.footer_top}`}
      >
        <img
          src="/images/muhammad-sallallahu-alaihi-wasallam.png"
          alt=""
          className={`${styles.namaiNabi} my-3`}
        />
        <p className="text-center">
          &ldquo;When Allah wishes good for someone, He bestows upon him the
          Understanding of Deen&ldquo;
        </p>
        <p lang="ar" className="text-center">
          &ldquo;من يرد الله به خيرًا يفقه في الدين&ldquo;
        </p>
        <p lang="ar" className="text-center">
          Prophet Muhammad ‎ صلى الله عليه وعلى آله وسلم
        </p>
      </div>
      <div className={`row px-5 ${styles.foot_content}`}>
        <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column justify-content-end">
          <div className="d-flex justify-content-center justify-content-md-start">
            <div className="social_media">
              <FaInstagram className="mx-2" />
              <FaLinkedin className="mx-2" />
              <FaGithub className="mx-2" />
            </div>
          </div>
          <p className="mx-2 my-2 text-center text-md-start">
            All Rights Reserved | 2024
          </p>
        </div>
        <div className="col-md-2 mb-4 mb-md-0">
          <h5>Regular Courses</h5>
          <ul>
            <li className="px-2 my-1">TarteelaQuran Qaida</li>
            <li className="px-2 my-1">Learn Qirat</li>
            <li className="px-2 my-1">Quran Memorization </li>
            <li className="px-2 my-1">Quran Reading</li>
          </ul>
        </div>
        <div className="col-md-2 mb-4 mb-md-0">
          <h5>Advanced Courses</h5>
          <ul>
            <li className="px-2 my-1">Arabic Language Course</li>
            <li className="px-2 my-1">Tafsir Course</li>
            <li className="px-2 my-1">Ijazazh Courses</li>
          </ul>
        </div>
        <div className="col-md-2 mb-4 mb-md-0">
          <h5>Links</h5>
          <ul>
            <li className="px-2 my-1">Home</li>
            <li className="px-2 my-1">About</li>
            <li className="px-2 my-1">Blog</li>
            <li className="px-2 my-1">Services</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Admissions</h5>
          <ul>
            <li className="px-2 my-1">Tuition & Financial Aid</li>
            <li className="px-2 my-1">How To Apply</li>
            <li className="px-2 my-1">Fee Payment</li>
            <li className="px-2 my-1">FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
