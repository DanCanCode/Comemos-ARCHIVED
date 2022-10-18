import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  ProfileImage,
  Logo,
  Heading,
  Flex,
  Text,
  AnchorLink,
} from "../styledcomps";
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
          {user.fullName}
        </Text>
        <Text mY="0" size="12px" weight="600" color="#808080">
          @{user.username}
        </Text>
      </Flex>

      <Flex justifyContent="center" mY="20px">
        <div
          style={{
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "0 25px 10px 25px",
          }}
        >
          <Text weight="600">54</Text>
          <Text mY="0" size="14px" overflowWrap="normal" width="100%">
            Posts
          </Text>
        </div>

        <div
          style={{
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            padding: "0 25px 10px 25px",
          }}
        >
          <Text weight="600">14.4k</Text>
          <Text mY="0" size="14px" overflowWrap="normal" width="100%">
            Followers
          </Text>
        </div>

        <div
          style={{
            padding: "0 25px 10px 25px",
          }}
        >
          <Text weight="600">32</Text>
          <Text mY="0" size="14px" overflowWrap="normal" width="100%">
            Following
          </Text>
        </div>
      </Flex>

      <Flex direction="column" alignItems="flex-start" justifyContent="center">
        <AnchorLink to="/explore">
          <span>
            <i></i>
          </span>
          Explore
        </AnchorLink>

        <AnchorLink to="/notifications">
          <span>
            <i></i>
          </span>
          Notification
        </AnchorLink>

        <AnchorLink to="/profile">
          <span>
            <i></i>
          </span>
          Profile
        </AnchorLink>

        <AnchorLink to="/stats">
          <span>
            <i></i>
          </span>
          Stats
        </AnchorLink>

        <AnchorLink to="/settings">
          <span>
            <i></i>
          </span>
          Settings
        </AnchorLink>

        <button
          onClick={async () => {
            await logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </Flex>
    </Nav>
  );
};

export default Navbar;
