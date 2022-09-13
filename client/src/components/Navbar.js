import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../styledcomps";

const Navbar = () => {
  return (
    <Nav>
      <a href="#">
        <img src="img/logo.png" alt="" />
      </a>

      <div>
        <div>
          <img src="img/profile.jpg" alt="" />
        </div>
        <div>
          <h1>Dua Lipa</h1>
          <img src="img/verify.png" alt="" />
        </div>
        <span>@lipa</span>
      </div>

      <div>
        <div>
          <h3>54</h3>
          <span>Posts</span>
        </div>

        <div>
          <h3>14.4k</h3>
          <span>Followers</span>
        </div>

        <div>
          <h3>14</h3>
          <span>Following</span>
        </div>
      </div>

      <div>
        <a href="#">
          <span>
            <i></i>
          </span>
          Explore
        </a>

        <a href="#">
          <span>
            <i></i>
          </span>
          Notification
        </a>

        <a href="#">
          <span>
            <i></i>
          </span>
          Profile
        </a>

        <a href="#">
          <span>
            <i></i>
          </span>
          Stats
        </a>

        <a href="#">
          <span>
            <i></i>
          </span>
          Setting
        </a>

        <a href="#">
          <span>
            <i></i>
          </span>
          Logout
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
