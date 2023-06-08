import axios from "axios";
import NewShoutout from "../models/NewShoutout";

const baseUrl = process.env.REACT_APP_FUNCTIONS_API_URL + "/shoutouts" || "";

export const getAllShoutouts = async (): Promise<NewShoutout[]> => {
  return (await axios.get(`${baseUrl}`)).data;
};

export const addShoutout = async (
  newText: NewShoutout
): Promise<NewShoutout> => {
  return (await axios.post(`${baseUrl}`, newText)).data;
};
