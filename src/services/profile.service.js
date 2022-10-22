import axios from "axios";

// andre and filipe dont like this.
// #Titos!
class ProfileService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  editProfile = (requestBody) => {
    return this.api.post("/profile/edit", requestBody);
  };
}

const profileService = new ProfileService();

export default profileService;
