import axios from "axios";
import NewShoutout from "../models/NewShoutout";

const baseUrl = process.env.REACT_APP_FUNCTIONS_API_URL || "";

export const getAllShoutouts = async (): Promise<NewShoutout[]> => {
  return (await axios.get(`${baseUrl}/shoutouts`)).data;
};

export const getUserShoutouts = async (
  name: string
): Promise<NewShoutout[]> => {
  return (await axios.get(`${baseUrl}/shoutouts/${encodeURIComponent(name)}`))
    .data;
};

export const addShoutout = async (newSO: NewShoutout): Promise<NewShoutout> => {
  return (await axios.post(`${baseUrl}/shoutouts`, newSO)).data;
};

export const deleteOneShoutout = (id: string): Promise<void | string> => {
  return axios.delete(`${baseUrl}/shoutouts/${id}`).then((res) => res.data);
};

export const getMyShoutouts = (name: string): Promise<NewShoutout[]> => {
  return axios
    .get(`${baseUrl}/me/${encodeURIComponent(name)}`)
    .then((res) => res.data);
};
