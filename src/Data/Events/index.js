import eventOne from "./2024-EventOne";
import eventTwo from "./2023-EventTwo";

const events = [eventOne, eventTwo];

export default events.sort((a, b) => new Date(b.date) - new Date(a.date));