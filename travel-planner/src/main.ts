import "./styles/style.css";

import { TripController } from "./controllers/TripController";


/**
 * Starts the application asynchronously.
 */
async function startApplication(): Promise<void> {


    console.log(
        "Starting Travel Planner..."
    );


    const controller = new TripController();


    controller.initialize();


    console.log(
        "Application initialized successfully."
    );


}


/**
 * Executes application startup.
 */
startApplication()
    .catch(error => {


        console.error(
            "Application failed to start:",
            error
        );


    });
    