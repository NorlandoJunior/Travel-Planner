import type { TripStatus } from "./TripStatus";

export interface ITrip {
    id: number;
    destination: string;
    startDate: string;
    endDate: string;
    budget: number;
    notes: string;
    status: TripStatus;
}