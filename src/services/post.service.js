import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class PostService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllPosts = (user) => {
    const { _id } = user;
    console.log(`createOrder id:`, _id);
    return this.api.get(`/my-posts/?userId=${_id}`);
  };

  createPost = (user, requestBody) => {
    const { username } = user; // destructure the username from the user model/object
    return this.api.post("/my-posts/create", {
      username,
      requestBody,
    }); // add the username to the post request to search for a user
  };
}

const postService = new PostService();

export default postService;