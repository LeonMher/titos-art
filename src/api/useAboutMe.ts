import { useQuery } from "react-query";
import axios from "axios";

const useAboutMe = () => {
  const { data, isLoading, isError, error } = useQuery("data", async () => {
    const response = await axios.get("http://localhost:3001/self");
    return response.data;
  });

  return { data, isLoading, isError, error };
};

export default useAboutMe;
