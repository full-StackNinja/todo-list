// Import necessary stylesheets
import "../stylesheets/normalize.css";
import "../stylesheets/my-css-reset.css";
import "../stylesheets/typography.css";
import "../stylesheets/index.css";

// Import Modules into main/index script file
import domManipulation from "./dom-manipulation";
import projectManager from "./project-manager";

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

// Add project when user click on Plus icon in projects
const addProject = document.querySelector('.add-project')
addProject.addEventListener("click", domManipulation.showProjectForm)

// get project data for further use when user press add button
const projectsContainer = document.querySelector('.projects-container')
const addProjectBtn = document.querySelector('.add-project-btn')

projectsContainer.addEventListener("submit", (event) => {
     const projectData = domManipulation.getProjectData(event)
     projectManager.saveProject(projectData)
     domManipulation.addProjectToDom(projectData)
}) 

// Todo... 
// Show/hide project cancel icon on mouseover/mouseleave
projectsContainer.onmouseover = domManipulation.toggleProjectRemoveIcon;
projectsContainer.onmouseleave = domManipulation.toggleProjectRemoveIcon;
// Todo...
// Cancel adding of the project
const cancelProjectBtn = document.querySelector('.cancel-project-btn')

// cancelProjectBtn.onclick = domManipulation.cancelProject;

// Toggle projects list on "Chevron Icon" click
const toggleProjectsList = document.querySelector(".toggle-projects-list");
// toggleProjectsList.addEventListener('click', domManipulation.toggleProjectsList)