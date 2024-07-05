import { useMutation } from "@tanstack/react-query";
import api from "..";

const getVideoContents = async (data: string) => {
  const response = await api.post("/search", { q: data });
  return response.data;
};
export const useGetVideos = () => {
  return useMutation({ mutationFn: (data: string) => getVideoContents(data) });
};
