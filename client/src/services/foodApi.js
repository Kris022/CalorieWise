const BASE_URL = "http://localhost:4000/";

export const fetchAllFoods = async () => {
  const res = await fetch(`${BASE_URL}api/foods/`);
  const json = await res.json();

  if (res.ok) {
    // return data
    return json;
  }
};

export const createFood = async (food) => {
  const res = await fetch(`${BASE_URL}api/foods/`, {
    method: "POST",
    body: JSON.stringify(food),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  if (!res.ok) {
    console.log(json);
  }

  if (res.ok) {
    // return data
    return json;
  }
};
