// Import necessary stylesheets
import "../stylesheets/normalize.css";
import "../stylesheets/my-css-reset.css";
import "../stylesheets/typography.css";
import "../stylesheets/index.css";

// Import Modules into main/index script file
import domManipulation from "./dom-manipulation";

// set overall page structure
domManipulation.setPageStructure();

// Add header Items
domManipulation.addHeaderItems();
