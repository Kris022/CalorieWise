// Returns user from local storage
export const getUserFromLocalStorage = () => {
  const userString = localStorage.getItem("user");
  return JSON.parse(userString);
};

// Calculates the sum for fetched food data
export const calculateSum = (property, data) => {
  const sum = data.reduce((acc, food) => acc + food[property], 0); // round to 1 decimal place
  return sum;
};

export const getDay = (dt) => {
  const day = new Date(dt)
    .toLocaleString("en-us", { weekday: "long" })
    .slice(0, 3);
  return day;
};

// Returns current date
export const getCurrentDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Get the previous 7 days from provided day
export const getPreviousSevenDays = (inputDate) => {
  const date = new Date(inputDate);
  const previousDays = [];

  for (let i = 0; i < 7; i++) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1 and pad with leading zero if needed
    const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
    previousDays.push(`${year}-${month}-${day}`);
    date.setDate(date.getDate() - 1); // Decrement the date by 1 day
  }

  return previousDays.reverse();
};

export const getDatesForMonth = (inputDate) => {
  const [year, month, day] = inputDate.split('-').map(Number);
  const firstDay = new Date(year, month - 1, 1); // Month is 0-indexed, so subtract 1
  const lastDay = new Date(year, month, 0);

  const dates = [];
  const currentDate = new Date(firstDay);

  while (currentDate <= lastDay) {
    const date = currentDate.getDate();
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
