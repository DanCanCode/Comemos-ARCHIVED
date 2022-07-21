import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux-store/posts";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <>
      <h1>Posts explore page</h1>
    </>
  );
};

export default Posts;
