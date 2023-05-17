import axios from "axios";

const baseUrl =
  "https://my-json-server.typicode.com/anvarortiqov/FekaCarsdata/cars";

export const myApi = {
  async getMyData() {
    const response = await axios.get(baseUrl);
    return response.data;
  },
};
