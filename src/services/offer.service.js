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
    return this.api.get(`/get-all-offers/?userId=${_id}`);
  };

  getAllOffersByPost = (postId) => {
    return this.api.get(`/get-all-offers-by-post/?postId=${postId}`);
  };

  getOfferPage = (postId, user, postByUserId) => {
    const { _id } = user;
    return this.api.get(
      `/create-offer/${postId}/?userId=${_id}&postByUserId=${postByUserId}`
    );
  };

  createOffer = (user, postId, requestBody) => {
    const { _id } = user;
    return this.api.post(`/create-offer/${postId}/?userId=${_id}`, requestBody);
  };
}

const offerService = new OfferService();

export default offerService;
