import {useQuery} from "@tanstack/react-query";
import api from "..";

const getVideoContents = async (data: string, page: number) => {
    const response = await api.get(
        `news/all?api_token=50alsHGpNAgDfbQYJREn4IZ3aZspoQTGUFHANqPE&search=${data}&limit=30&page=${page}`
    );
    return response.data;
};
export const useGetVideos = (data: string, page: number) => {
    return useQuery({queryKey: [data], queryFn: () => getVideoContents(data, page)});
};
