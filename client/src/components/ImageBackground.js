import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ImageRow } from "../styledcomps";
import { fetchPosts } from "../redux-store/posts";

const ImageBackground = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  const images = posts.map((post) => {
    return <Image key={`${post.id}`} src={`${post.picture}`} />;
  });

  return (
    <>
      <ImageRow>{images.slice(0, 6)}</ImageRow>
      <ImageRow dir="reverse">{images.slice(6, 12)}</ImageRow>
      <ImageRow>{images.slice(12, 18)}</ImageRow>
      <ImageRow dir="reverse">{images.slice(0, 6).reverse()}</ImageRow>
    </>
  );
};

export default ImageBackground;