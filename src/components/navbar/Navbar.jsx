import { CiSearch } from "react-icons/ci";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={`${styles.navbar} bg-white`}>
      <ul>
        <li className={styles.logo}>LOGO</li>
        <li>
          <select className={styles.selectOption}>
            <option value="course">Courses</option>
          </select>
        </li>
        <li className={styles.searchContainer}>
          <CiSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="search"
            name="search"
            placeholder="Search"
          />
        </li>
        <li className={styles.navItem}>Contact Us</li>
        <li className={styles.navItem}>Event</li>
        <li className={styles.navItem}>Login</li>
        <li>
          <button className={styles.signUpBtn}>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
