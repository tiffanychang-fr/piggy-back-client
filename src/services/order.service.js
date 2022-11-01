import axios from "axios";

class OrderService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllOrders = (user) => {
    const { _id } = user;
    return this.api.get(`/my-orders/?userId=${_id}`);
  };
}

const orderService = new OrderService();

export default orderService;
