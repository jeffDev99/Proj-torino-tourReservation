// get tours

// get tour detail
 const fetchTour = async (tourId) => {
  let res = await fetch(`${process.env.BASE_URL}/tour/${tourId}`);
  let data = await res.json();
  return data;
};

export {fetchTour}