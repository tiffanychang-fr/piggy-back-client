import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class OfferService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllOffers = (user) => {
    const { _id } = user;
    return this.api.get(`/create-offer/?userId=${_id}`);
  };

  getOfferPage = (postId) => {
    return this.api.get(`/create-offer/${postId}`);
  };

  createOffer = (user, postId, requestBody) => {
    const { _id } = user;
    return this.api.post(`/create-offer/${postId}/?userId=${_id}`, requestBody);
  };
}

const offerService = new OfferService();

export default offerService;
