import api from "@/core/config/api";

// get tour detail
 const useFetchTour = async (tourId) => {
  let res =await api.get(`/tour/${tourId}`);
  let data = res.data;
  return data;
};

export {useFetchTour }