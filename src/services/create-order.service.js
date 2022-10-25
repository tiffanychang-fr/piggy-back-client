import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class CreateOrderService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  createOrder = (user, requestBody) => {
    const { username } = user;
    console.log(`username from the createOrder:`, username);
    return this.api.post("/my-posts/create", { username, requestBody });
  };
}

const createOrderService = new CreateOrderService();

export default createOrderService;
