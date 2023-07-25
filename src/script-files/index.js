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
domManipulation.setHeaderStructure();

// Add sidebar items
domManipulation.setSidebarStructure();

// Toggle sidebar container on menu icon click
const menuIcon = document.querySelector(".menu-item");

menuIcon.onclick = domManipulation.toggleSidebar;

// show/hide projects' add icons on mouse enter to/leave from sidebar container
const sidebarContainer = document.querySelector(".sidebar-container");

sidebarContainer.onmouseover = domManipulation.showProjectIcons;
sidebarContainer.onmouseleave = domManipulation.hideProjectIcons;
