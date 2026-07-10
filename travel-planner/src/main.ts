import "./styles/style.css";

import { TripController } from "./controllers/TripController";
import { FormView } from "./views/FormView";

console.log(FormView);

/**
 * Starts the application.
 */
const controller = new TripController();

controller.initialize();