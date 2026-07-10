import { Trip } from "../models/Trip";
import { TripStatus } from "../models/TripStatus";

/**
 * Handles everything related to the trip form.
 */
export class FormView {

    /**
     * Returns the HTML for the trip form.
     */
    public renderForm(): string {

        return `

            <section class="trip-form">

                <h2>Add New Trip</h2>

                <form id="trip-form">

                    <input
                        id="destination"
                        type="text"
                        placeholder="Destination"
                        required
                    />

                    <input
                        id="start-date"
                        type="date"
                        required
                    />

                    <input
                        id="end-date"
                        type="date"
                        required
                    />

                    <input
                        id="budget"
                        type="number"
                        placeholder="Budget"
                        min="0"
                        required
                    />

                    <textarea
                        id="notes"
                        placeholder="Trip notes"
                    ></textarea>

                    <select id="status">

                        <option value="${TripStatus.Planned}">
                            Planned
                        </option>

                        <option value="${TripStatus.Ongoing}">
                            Ongoing
                        </option>

                        <option value="${TripStatus.Completed}">
                            Completed
                        </option>

                        <option value="${TripStatus.Cancelled}">
                            Cancelled
                        </option>

                    </select>

                    <button
                        id="submit-button"
                        type="submit"
                    >

                        Save Trip

                    </button>

                </form>

            </section>

        `;

    }

    /**
     * Returns the form element.
     */
    private getForm(): HTMLFormElement {

        return document.querySelector("#trip-form") as HTMLFormElement;

    }

    /**
     * Registers the submit event.
     * @param callback Function executed on submit.
     */
    public bindSubmit(callback: () => void): void {

        this.getForm().addEventListener("submit", event => {

            event.preventDefault();

            callback();

        });

    }

    /**
     * Returns the values entered in the form.
     */
    public getFormData() {

        return {

            destination:
                (document.querySelector("#destination") as HTMLInputElement).value,

            startDate:
                (document.querySelector("#start-date") as HTMLInputElement).value,

            endDate:
                (document.querySelector("#end-date") as HTMLInputElement).value,

            budget:
                Number(
                    (document.querySelector("#budget") as HTMLInputElement).value
                ),

            notes:
                (document.querySelector("#notes") as HTMLTextAreaElement).value,

            status:
                (document.querySelector("#status") as HTMLSelectElement)
                    .value as TripStatus

        };

    }

    /**
     * Populates the form with an existing trip.
     * @param trip Trip to edit.
     */
    public fillForm(trip: Trip): void {

        (document.querySelector("#destination") as HTMLInputElement).value =
            trip.destination;

        (document.querySelector("#start-date") as HTMLInputElement).value =
            trip.startDate;

        (document.querySelector("#end-date") as HTMLInputElement).value =
            trip.endDate;

        (document.querySelector("#budget") as HTMLInputElement).value =
            trip.budget.toString();

        (document.querySelector("#notes") as HTMLTextAreaElement).value =
            trip.notes;

        (document.querySelector("#status") as HTMLSelectElement).value =
            trip.status;

    }

    /**
     * Clears the form.
     */
    public clearForm(): void {

        this.getForm().reset();

    }

}