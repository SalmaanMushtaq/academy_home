import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={`container-fluid p-5 ${styles.footer} `}>
      <div
        className={`row justify-content-center align-items-center w-50 m-auto ${styles.footer_top}`}
      >
        <img
          src="/images/muhammad-sallallahu-alaihi-wasallam.png"
          alt=""
          className={`${styles.namaiNabi}`}
        />
        <p>
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
        <div className="col-4 d-flex flex-column justify-content-end">
          <div className="social_media">
            <FaInstagram className="mx-2" />
            <FaLinkedin className="mx-2" />
            <FaGithub className="mx-2" />
          </div>
          <p className="mx-2 my-2">All Rights Reserved | 2024</p>
        </div>
        <div className="col-2">
          <h5>Regular Courses</h5>
          <ul>
            <li>TarteelaQuran Qaida</li>
            <li>Learn Qirat</li>
            <li>Quran Memorization </li>
            <li>Quran Reading</li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Advanced Courses</h5>
          <ul>
            <li>Arabic Language Course</li>
            <li>Tafsir Course</li>
            <li>Ijazazh Courses</li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Links</h5>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Addmissions</h5>
          <ul>
            <li>Tuition & Financial Aid</li>
            <li>How To Apply</li>
            <li>fee Payment</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
