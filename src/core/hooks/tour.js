import api from "@/core/config/api";

// get all tours
const useFetchAllTours = async () => {
  let res =await api.get(`/tour`);
  let data = res.data;
  return data;
};
// get tour detail
 const useFetchTour = async (tourId) => {
  let res =await api.get(`/tour/${tourId}`);
  let data = res.data;
  return data;
};

export {useFetchTour , useFetchAllTours}