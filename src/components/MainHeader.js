// import userEvent from "@testing-library/user-event";
import { NavLink } from "react-router-dom";
import { Requirement } from "../pages/Routes/RoutesMiddleware";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  function logoutUserEvent() {
    localStorage.removeItem("authUser");
    window.location.reload();
  }
  let req = new Requirement();
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          {req.isLogin() ? null : (
            <li>
              <NavLink activeClassName={classes.active} to="/new-en">
                En-News
              </NavLink>
            </li>
          )}
          <li>
            <NavLink activeClassName={classes.active} to="/ukra">
              Uk-news
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/sports">
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/science">
              Science
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/health">
              Health
            </NavLink>
          </li>
          {req.isLogin() ? (
            <li id>
              <button
                style={{}}
                onClick={() => {
                  logoutUserEvent();
                }}
              >
                logOut
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
