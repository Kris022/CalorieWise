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

export const getDay = (dateString) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString + "T00:00:00");
  const dayOfWeekIndex = date.getDay();
  return daysOfWeek[dayOfWeekIndex];
};





export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to get an array of the previous days from a given date
export function getPreviousDays(date, daysToLoad = 7) {
  const result = [];
  const currentDate = new Date(date);

  for (let i = 0; i < daysToLoad; i++) {
    currentDate.setDate(currentDate.getDate() - 1);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    result.unshift(`${year}-${month}-${day}`);
  }

  return result;
}

// Function to get an array of the next days from a given date
export function getNextDays(date, daysToLoad = 7) {
  const result = [];
  const currentDate = new Date(date);

  for (let i = 0; i < daysToLoad; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    result.push(`${year}-${month}-${day}`);
  }

  return result;
}
