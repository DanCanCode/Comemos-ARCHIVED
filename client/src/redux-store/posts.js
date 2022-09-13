import axios from "axios";

// ACTION TYPES
const ADD_POST = "CREATE_POST";
const SET_POSTS = "SET_POSTS";
const SET_SINGLE_POST = "SET_SINGLE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

// ACTION CREATORS
const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

const setSinglePost = (post) => {
  return {
    type: SET_SINGLE_POST,
    post,
  };
};

const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post,
  };
};

// THUNKS
export const fetchPosts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/posts");
    dispatch(setPosts(data));
  };
};

export const fetchSinglePost = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/posts/${id}`);
    dispatch(setSinglePost(data));
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    const { data } = await axios.post("/api/posts", post);
    dispatch(addPost(data));
  };
};

export const updatedPost = (post) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/posts/${post.id}`, post);
    dispatch(updatePost(data));
  };
};

export const removePost = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/posts/${id}`);
    dispatch(deletePost(data));
  };
};

// REDUCER
export default function postsReducer(state = [], action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case SET_SINGLE_POST:
      return action.post;
    case ADD_POST:
      return [...state, action.post];
    case UPDATE_POST:
      return state.map((post) =>
        post.id === action.post.id ? action.post : post
      );
    case DELETE_POST:
      return state.filter((post) => post.id !== action.post.id);
    default:
      return state;
  }
}
