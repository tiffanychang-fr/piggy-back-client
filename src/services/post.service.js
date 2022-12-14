import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class PostService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  showAllPosts = () => {
    return this.api.get("/all-posts");
  };

  getAllPosts = (user) => {
    const { _id } = user;
    return this.api.get(`/my-posts/?userId=${_id}`);
  };

  createPost = (user, requestBody) => {
    const { username } = user; // destructure the username from the user model/object
    return this.api.post("/my-posts/create", {
      username,
      requestBody,
    }); // add the username to the post request to search for a user
  };

  getSinglePost(postId) {
    return this.api.get(`/my-posts/edit/details/${postId}`);
  }

  getSingleEditPost = (post) => {
    return this.api.get(`/my-posts/edit/${post._id}`, post);
  };

  editPost = (postId, requestBody) => {
    return this.api.post(`/my-posts/edit/${postId}`, requestBody);
  };

  deletePost = (post) => {
    return this.api.delete(`/my-posts/delete/${post._id}`);
  };
}

const postService = new PostService();

export default postService;
