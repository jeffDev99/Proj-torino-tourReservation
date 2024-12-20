import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post(`/auth/send-otp`, data);
  return useMutation({ mutationFn });
};
const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    queryClient.invalidateQueries({queryKey: ["user-data"]});
    return data;
  };
  return useMutation({ mutationFn, onSuccess });
};
export { useSendOtp, useCheckOtp };
