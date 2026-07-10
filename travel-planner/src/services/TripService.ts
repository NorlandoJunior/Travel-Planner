import { Trip } from "../models/Trip";
import { TripStatus } from "../models/TripStatus";
import { StorageService } from "./StorageService";

/**
 * Handles all business logic related to trips.
 */
export class TripService {

    /**
     * Storage service instance.
     */
    private storageService: StorageService;

    /**
     * Trip collection.
     */
    private trips: Trip[];

    /**
     * Creates a new TripService.
     */
    constructor() {

        this.storageService = new StorageService();

        this.trips = this.storageService.loadTrips();

        // Load sample data if LocalStorage is empty
        if (this.trips.length === 0) {

            this.trips = [

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

            this.save();

        }

    }

    /**
     * Returns all trips.
     */
    getTrips(): Trip[] {

        return this.trips;

    }

    /**
     * Returns one trip.
     * @param id Trip id.
     */
    getTripById(id: number): Trip | undefined {

        return this.trips.find(
            trip => trip.id === id
        );

    }

    /**
     * Adds a new trip.
     * @param trip Trip object.
     */
    addTrip(trip: Trip): void {

        this.trips.push(trip);

        this.save();

    }

    /**
     * Updates an existing trip.
     * @param updatedTrip Updated trip.
     */
    updateTrip(updatedTrip: Trip): void {

        const index = this.trips.findIndex(
            trip => trip.id === updatedTrip.id
        );

        if (index !== -1) {

            this.trips[index] = updatedTrip;

            this.save();

        }

    }

    /**
     * Deletes a trip.
     * @param id Trip id.
     */
    deleteTrip(id: number): void {

        this.trips = this.trips.filter(
            trip => trip.id !== id
        );

        this.save();

    }

    /**
     * Updates only the trip status.
     * @param id Trip id.
     * @param status New status.
     */
    changeStatus(
        id: number,
        status: TripStatus
    ): void {

        const trip = this.getTripById(id);

        if (!trip) return;

        trip.status = status;

        this.save();

    }

    /**
     * Returns the next available id.
     */
    generateId(): number {

        if (this.trips.length === 0) {

            return 1;

        }

        return Math.max(
            ...this.trips.map(
                trip => trip.id
            )
        ) + 1;

    }

    /**
     * Saves the current list.
     */
    private save(): void {

        this.storageService.saveTrips(
            this.trips
        );

    }

}