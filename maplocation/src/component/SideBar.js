import AppNav from "./AppNav";
import styles from "../modules/SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}
          by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
