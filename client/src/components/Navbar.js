import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Nav, ProfileImage, Logo, Heading } from "../styledcomps";
import { useAuth } from "../context/AuthContext";
import { fetchSingleUser } from "../redux-store/singleUser";

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleUser(currentUser.email));
  }, []);

  const user = useSelector((state) => state.singleUser);
  console.log(user);
  return (
    <Nav>
      <Logo size="40px" mL="10px" mT="10px" src={"./public/images/logo.png"} />
      <Heading>comemos</Heading>

      <ProfileImage src={user.profilePic} alt="user image" />

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

        <button
          onClick={async () => {
            await logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </Nav>
  );
};

export default Navbar;
