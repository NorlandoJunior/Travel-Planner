import { Trip } from "../models/Trip";

/**
 * Responsible for rendering the trip list.
 */
export class RenderView {

    /**
     * Returns the CSS class based on the trip status.
     * @param status Trip status.
     */
    private getStatusClass(status: string): string {

        switch (status) {

            case "Planned":
                return "planned";

            case "Ongoing":
                return "ongoing";

            case "Completed":
                return "completed";

            case "Cancelled":
                return "cancelled";

            default:
                return "";

        }

    }

    /**
     * Returns an icon based on the trip status.
     * @param status Trip status.
     */
    private getStatusIcon(status: string): string {

        switch (status) {

            case "Planned":
                return "📅";

            case "Ongoing":
                return "✈️";

            case "Completed":
                return "✅";

            case "Cancelled":
                return "❌";

            default:
                return "";

        }

    }

    /**
     * Generates the trip list HTML.
     * @param trips List of trips.
     */
    public renderTrips(trips: Trip[]): string {

        if (trips.length === 0) {

            return `
                <p class="empty-message">
                    No trips have been added yet.
                </p>
            `;

        }

        return trips
            .map(trip => this.renderCard(trip))
            .join("");

    }

    /**
     * Generates one trip card.
     * @param trip Trip object.
     */
    private renderCard(trip: Trip): string {

        return `

            <article class="trip-card">

                <h2>${trip.destination}</h2>

                <p>

                    <strong>Status:</strong>

                    <span class="status ${this.getStatusClass(trip.status)}">

                        ${this.getStatusIcon(trip.status)}

                        ${trip.status}

                    </span>

                </p>

                <p>

                    <strong>Budget:</strong>

                    $${trip.budget}

                </p>

                <p>

                    <strong>Start:</strong>

                    ${trip.startDate}

                </p>

                <p>

                    <strong>End:</strong>

                    ${trip.endDate}

                </p>

                <p>

                    ${trip.notes}

                </p>

                <div class="trip-actions">

                    <button
                        class="edit-button"
                        data-id="${trip.id}"
                    >
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-button"
                        data-id="${trip.id}"
                    >
                        🗑️ Delete
                    </button>

                </div>

            </article>

        `;

    }

}