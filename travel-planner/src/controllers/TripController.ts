import { TripService } from "../services/TripService";
import { RenderView } from "../views/RenderView";
import { FormView } from "../views/FormView";
import { Trip } from "../models/Trip";

/**
 * Controls the communication between services and views.
 */
export class TripController {

    /**
     * Handles trip operations.
     */
    private tripService: TripService;

    /**
     * Handles trip rendering.
     */
    private renderView: RenderView;

    /**
     * Handles form interactions.
     */
    private formView: FormView;

    /**
     * Application container.
     */
    private app: HTMLDivElement;

    /**
     * Stores the id of the trip being edited.
     */
    private editingTripId: number | null = null;


    /**
     * Creates the controller.
     */
    constructor() {

        this.tripService = new TripService();

        this.renderView = new RenderView();

        this.formView = new FormView();


        const element = document.querySelector<HTMLDivElement>("#app");


        if (!element) {

            throw new Error(
                "Application container was not found."
            );

        }


        this.app = element;

    }


    /**
     * Starts the application.
     */
    public initialize(): void {

        this.render();

        this.setupEvents();

    }


    /**
     * Renders the complete application.
     */
    private render(): void {

        this.app.innerHTML = `

            <div class="container">

                <h1>
                    Travel Planner
                </h1>


                ${this.formView.renderForm()}


                <section class="trip-list">

                    ${this.renderView.renderTrips(
                        this.tripService.getTrips()
                    )}

                </section>


            </div>

        `;

    }


    /**
     * Configures application events.
     */
    private setupEvents(): void {


        /*
         * Form submit event.
         */
        this.formView.bindSubmit(() => {

            this.saveTrip();

        });


        /*
         * Button events.
         */
        this.setupButtonEvents();


    }



    /**
     * Creates or updates a trip.
     */
    private saveTrip(): void {


        const data = this.formView.getFormData();



        if (this.editingTripId !== null) {


            const updatedTrip = new Trip(

                this.editingTripId,

                data.destination,

                data.startDate,

                data.endDate,

                data.budget,

                data.notes,

                data.status

            );


            this.tripService.updateTrip(updatedTrip);


            this.editingTripId = null;


        } else {


            const newTrip = new Trip(

                this.tripService.generateId(),

                data.destination,

                data.startDate,

                data.endDate,

                data.budget,

                data.notes,

                data.status

            );


            this.tripService.addTrip(newTrip);

        }



        this.refresh();


        this.formView.clearForm();


    }



    /**
     * Refreshes the application view.
     */
    private refresh(): void {


        this.render();


        this.setupEvents();


    }



    /**
     * Configures edit and delete buttons.
     */
    private setupButtonEvents(): void {


        const editButtons =
            document.querySelectorAll<HTMLButtonElement>(
                ".edit-button"
            );



        const deleteButtons =
            document.querySelectorAll<HTMLButtonElement>(
                ".delete-button"
            );



        editButtons.forEach(button => {


            button.addEventListener(
                "click",
                () => {

                    const id = Number(
                        button.dataset.id
                    );


                    this.editTrip(id);


                }
            );


        });



        deleteButtons.forEach(button => {


            button.addEventListener(
                "click",
                () => {


                    const id = Number(
                        button.dataset.id
                    );


                    this.deleteTrip(id);


                }
            );


        });


    }



    /**
     * Edits an existing trip.
     * @param id Trip id.
     */
    private editTrip(id: number): void {


        const trip = this.tripService.getTripById(id);



        if (!trip) {

            return;

        }



        this.editingTripId = trip.id;


        this.formView.fillForm(trip);



        /*
         * Scrolls to the form when editing.
         */
        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    }



    /**
     * Deletes a trip.
     * @param id Trip id.
     */
    private deleteTrip(id: number): void {


        const confirmation = confirm(
            "Are you sure you want to delete this trip?"
        );



        if (!confirmation) {

            return;

        }



        this.tripService.deleteTrip(id);



        this.refresh();


    }


}