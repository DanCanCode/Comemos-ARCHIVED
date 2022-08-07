import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, PopUp, StyledLink } from "../styledcomps";
import { fetchPosts } from "../redux-store/posts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  return (
    <>
      {posts.map((post) => {
        return <Image key={`${post.id}`} src={`${post.picture}`} />;
      })}
      <PopUp>
        <h1>welcome to comemos!</h1>
        <p>Post photos, share recipes, connect with friends! </p>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </PopUp>
    </>
  );
};

export default Home;
