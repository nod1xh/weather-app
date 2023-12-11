const currentDate = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };
export const formattedDate = currentDate.toLocaleDateString("en-US", options);
