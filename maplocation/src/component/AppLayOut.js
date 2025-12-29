import SideBar from "./SideBar"
import Map from "./Map";
import styles from '../modules/AppLayout.module.css'
import { Outlet } from "react-router-dom";
function AppLayOut() {
    return (
      <div className={styles.app}>       
<SideBar/>
<Map/>
      </div>
    );
}

export default AppLayOut
