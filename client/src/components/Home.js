import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ImageRow, PopUp, StyledLink } from "../styledcomps";
import { fetchPosts } from "../redux-store/posts";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  const images = posts.map((post) => {
    return <Image key={`${post.id}`} src={`${post.picture}`} />;
  });

  console.log(images);
  return (
    <div>
      <ImageRow>{images.slice(0, 6)}</ImageRow>
      <ImageRow>{images.slice(6, 12)}</ImageRow>
      <ImageRow>{images.slice(12, 18)}</ImageRow>
      <ImageRow>{images.slice(0, 6).reverse()}</ImageRow>
      <PopUp>
        <h1>welcome to comemos!</h1>
        <p>Share photos, find recipes, connect with friends!</p>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </PopUp>
    </div>
  );
};

export default Home;
