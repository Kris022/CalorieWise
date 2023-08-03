// Calculates the sum for fetched food data
export const calculateSum = (property, data) => {
  const sum = data.reduce((acc, food) => acc + food[property], 0); // round to 1 decimal place
  return sum;
};

export const getCurrentDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
