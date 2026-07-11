import { Trip } from "../models/Trip";

/**
 * Handles LocalStorage operations.
 */
export class StorageService {


    /**
     * LocalStorage key.
     */
    private readonly STORAGE_KEY = "travel-planner-trips";



    /**
     * Save all trips.
     *
     * @param trips Trip list.
     */
    saveTrips(
        trips: Trip[]
    ): void {


        localStorage.setItem(

            this.STORAGE_KEY,

            JSON.stringify(trips)

        );


    }





    /**
     * Saves trips asynchronously.
     * Demonstrates async/await functionality.
     *
     * @param trips Trip list.
     */
    async saveTripsAsync(
        trips: Trip[]
    ): Promise<void> {


        await Promise.resolve();


        this.saveTrips(
            trips
        );


    }





    /**
     * Load all trips.
     *
     * @returns Trip list.
     */
    loadTrips(): Trip[] {


        const data =
            localStorage.getItem(
                this.STORAGE_KEY
            );



        if (!data) {

            return [];

        }



        const parsed: Trip[] =
            JSON.parse(data);



        return parsed.map(trip =>

            new Trip(

                trip.id,

                trip.destination,

                trip.startDate,

                trip.endDate,

                trip.budget,

                trip.notes,

                trip.status

            )

        );


    }





    /**
     * Loads trips asynchronously.
     * Demonstrates async/await functionality.
     *
     * @returns Promise containing trips.
     */
    async loadTripsAsync(): Promise<Trip[]> {


        await Promise.resolve();


        return this.loadTrips();


    }





    /**
     * Remove all saved trips.
     */
    clearStorage(): void {


        localStorage.removeItem(

            this.STORAGE_KEY

        );


    }


}