import { CiSearch } from "react-icons/ci";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white`}>
      <a className={`${styles.logo} navbar-brand`} href="#">
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse fw-medium"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav justify-content-between">
          <li className={`nav-item ${styles.coursesContainer}`}>
            <select
              className={`${styles.selectOption} form-select`}
              id="courseSelect"
            >
              <option value="course">Courses</option>
            </select>
          </li>
          <li
            className={`nav-item form-group ${styles.searchContainer} align-items-center`}
          >
            <CiSearch className={styles.searchIcon} />
            <input
              className={`${styles.searchInput} form-control`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
        </ul>
        <ul className="navbar-nav justify-content-evenly">
          <li className="nav-item">
            <a className={`${styles.navItem} nav-link`} href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className={`${styles.navItem} nav-link`} href="#">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className={`${styles.navItem} nav-link`} href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <button
              className={`${styles.signUpBtn} btn btn-outline-success`}
              type="submit"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
