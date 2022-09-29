import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        {localStorage.getItem("item") ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
            <li>
              <Link to="/todo">Todo Plan</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
