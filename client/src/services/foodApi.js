const BASE_URL = "http://localhost:4000/";

export const fetchAllFoods = async () => {
  const res = await fetch(`${BASE_URL}api/foods/`);
  const json = await res.json();

  if (res.ok) {
    // return data
    return json;
  }
};
