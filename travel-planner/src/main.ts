import "./styles/style.css";

import { Trip } from "./models/Trip";
import { TripStatus } from "./models/TripStatus";

const trip = new Trip(
    1,
    "Paris",
    "2026-08-15",
    "2026-08-25",
    3500,
    "Visit the Eiffel Tower and museums.",
    TripStatus.Planned
);

console.log(trip);

const app = document.querySelector("#app");

if (app) {
    app.innerHTML = `
        <h1>Travel Planner</h1>

        <h2>${trip.destination}</h2>

        <p>Status: ${trip.status}</p>

        <p>Budget: $${trip.budget}</p>
    `;
}