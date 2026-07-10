import type { ITrip } from "./ITrip";
import { TripStatus } from "./TripStatus";

/**
 * Represents a travel plan.
 */

export class Trip implements ITrip {
    constructor(
        public id: number,
        public destination: string,
        public startDate: string,
        public endDate: string,
        public budget: number,
        public notes: string,
        public status: TripStatus
    ) {}
}