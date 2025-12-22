import { NavLink } from "react-router-dom"
function PageNav() {
    return (
      <div>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/price">Pricing</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
}

export default PageNav
