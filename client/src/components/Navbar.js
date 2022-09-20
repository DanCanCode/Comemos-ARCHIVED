import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Nav, ProfileImage, Logo, Heading, Flex, Text } from "../styledcomps";
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
  return (
    <Nav>
      <Flex>
        <Logo
          size="40px"
          mL="20px"
          mT="12px"
          mR="0"
          src={"./public/images/logo.png"}
        />
        <Heading size="24px" spacing=".5px" mT="12px" mL="12px">
          comemos
        </Heading>
      </Flex>

      <Flex direction="column">
        <ProfileImage src={user.profilePic} alt="user image" />
        <Text weight="600" size="20px" mY="20px" mB="10px">
          Daniel Elijah
        </Text>
        <Text mY="0" size="14px" weight="600" color="#808080">
          @{user.username}
        </Text>
      </Flex>

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
