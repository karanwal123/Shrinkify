import axios from "axios";

export const ShortUrlApi = async (url) => {
  const data_from_api = axios.post("http://localhost:3000/api/create", {
    originalURL: url,
  });
  return data_from_api;
};
