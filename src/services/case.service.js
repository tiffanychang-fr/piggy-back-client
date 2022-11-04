import axios from "axios";

class CaseService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  getAllAcceptedCases = (user) => {
    const { _id } = user;
    return this.api.get(`/seller/?userId=${_id}`);
  };
}

const caseService = new CaseService();

export default caseService;
