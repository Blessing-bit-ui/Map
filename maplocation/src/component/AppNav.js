import styles from "../modules/AppNav.module.css"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

function AppNav() {
 return (
        <nav className={styles.nav}>
           <ul>
            <li>
                <NavLink to="cities">
                   Cities
                </NavLink>
            </li>
            <li>
                <NavLink to="countries">
                    Countries
                </NavLink>
            </li>
           </ul>
        </nav>
    )
        

}

export default AppNav
