import axios from "axios";

// Action types
const CREATE_POST = "CREATE_POST";
const SET_POSTS = "SET_POSTS";
const UPDATE_POST = "UPDATE_POSTS";
const DELETE_POSTS = "DELETE_POSTS";

// Action creators
export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const createPosts = (post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POSTS,
    post,
  };
};

// Thunks
export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api");
    dispatch(setPosts(data));
  };
};

// Reducer
export default function postsReducer(state = [], action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}
