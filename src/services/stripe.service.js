import axios from "axios";

class StripeService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  createConnectAccount = (user, token) => {
    const { username } = user;
    return this.api.post(
      "/create-connect-account",
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  getAccountStatus = (user, token) => {
    const { username } = user;
    return this.api.post(
      "/get-account-status",
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}

const stripeService = new StripeService();

export default stripeService;
