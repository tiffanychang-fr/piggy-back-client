import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class CreateOrderService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllOrders = () => {
    return this.api.get("/my-posts");
  };

  createOrder = (user, requestBody) => {
    const { username } = user; // destructure the username from the user model/object

    return this.api.post("/my-posts/create", {
      username,
      requestBody,
    }); // add the username to the post request to search for a user
  };
}

const createOrderService = new CreateOrderService();

export default createOrderService;
