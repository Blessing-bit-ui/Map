import SideBar from "./SideBar"
import styles from '../modules/AppLayout.module.css'
function AppLayOut() {
    return (
      <div className={styles.app}>
       
        <SideBar />
      </div>
    );
}

export default AppLayOut
