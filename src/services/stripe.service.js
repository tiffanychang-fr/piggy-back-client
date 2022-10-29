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

  getAccountBalance = (user, token) => {
    const { username } = user;
    return this.api.post(
      "/get-account-balance",
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  currencyFormatter = (balancePending) => {
    return (balancePending.amount / 100).toLocaleString(
      balancePending.currency,
      {
        style: "currency",
        currency: balancePending.currency,
      }
    );
  };

  payoutSetting = (user, token) => {
    const { username } = user;
    return this.api.post(
      "/payout-setting",
      { username },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  getSessionId = (token, offerId) => {
    console.log("hit stripe service");
    return this.api.post(
      "/stripe-session-id",
      { offerId },
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
