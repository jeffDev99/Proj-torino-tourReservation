import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

const useGetUserData = () => {
  const queryKey = ["user-data"];
  const queryFn = () => api.get("user/profile");
  return useQuery({ queryKey, queryFn });
};
// get all tours
const useFetchAllTours = () => {
  const queryKey = ["tours"];
  const queryFn = () => api.get(`/tour`);
  return useQuery({ queryKey, queryFn });
};
export { useGetUserData , useFetchAllTours };