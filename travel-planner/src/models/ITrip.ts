import type { TripStatus } from "./TripStatus";

/**
 * Represents the structure of a trip.
 */

export interface ITrip {
    id: number;
    destination: string;
    startDate: string;
    endDate: string;
    budget: number;
    notes: string;
    status: TripStatus;
}