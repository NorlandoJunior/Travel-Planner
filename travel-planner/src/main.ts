import "./styles/style.css";

import { Trip } from "./models/Trip";
import { TripStatus } from "./models/TripStatus";

// Sample trip data used to populate the application
const trips: Trip[] = [
    new Trip(
        1,
        "Paris",
        "2026-08-15",
        "2026-08-25",
        3500,
        "Visit the Eiffel Tower and museums.",
        TripStatus.Planned
    ),

    new Trip(
        2,
        "Tokyo",
        "2026-11-05",
        "2026-11-18",
        5200,
        "Visit Akihabara and Mount Fuji.",
        TripStatus.Ongoing
    ),

    new Trip(
        3,
        "New York",
        "2026-12-20",
        "2026-12-28",
        2800,
        "Christmas vacation.",
        TripStatus.Completed
    )
];

// Select the application container
const app = document.querySelector<HTMLDivElement>("#app");

// Render the application interface
function renderTrips(): void {

    if (!app) return;

    app.innerHTML = `
        <h1>Travel Planner</h1>

        <section class="trip-form-container">

            <h2>Add a New Trip</h2>

            <form id="trip-form">

                <input
                    type="text"
                    id="destination"
                    placeholder="Destination"
                    required
                />

                <input
                    type="date"
                    id="start-date"
                    required
                />

                <input
                    type="date"
                    id="end-date"
                    required
                />

                <input
                    type="number"
                    id="budget"
                    placeholder="Budget"
                    required
                />

                <textarea
                    id="notes"
                    placeholder="Trip notes"
                ></textarea>

                <select id="status">
                    <option value="Planned">Planned</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <button type="submit">
                    Add Trip
                </button>

            </form>

        </section>

        <section class="trip-list">

            ${trips.map((trip) => `
                <div class="trip-card">

                    <h2>${trip.destination}</h2>

                    <p><strong>Status:</strong> ${trip.status}</p>

                    <p><strong>Budget:</strong> $${trip.budget}</p>

                    <p><strong>Dates:</strong> ${trip.startDate} - ${trip.endDate}</p>

                    <p>${trip.notes}</p>

                </div>
            `).join("")}

        </section>
    `;
}

// Configure form events
function setupForm(): void {

    const form = document.querySelector<HTMLFormElement>("#trip-form");

    if (!form) return;

    // Event listeners will be added here in the next step.

}

// Initialize the application
renderTrips();
setupForm();