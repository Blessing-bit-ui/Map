import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

function AppNav() {
    return (
        <div>
            <NavLink to="cities">
                Cities
            </NavLink>

            <NavLink to="countries">
                Countries
            </NavLink>
        </div>
    )
}

export default AppNav
