// Import necessary stylesheets
import "../stylesheets/normalize.css";
import "../stylesheets/my-css-reset.css";
import "../stylesheets/typography.css";
import "../stylesheets/index.css";
import "../stylesheets/content-container.css";

// Import Modules into main/index script file
import domManipulation from "./dom-manipulation";
import projectManager from "./project-manager";
import todoListManager from "./todoListManager";

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

sidebarContainer.addEventListener("mouseover", domManipulation.showProjectIcons);
sidebarContainer.addEventListener("mouseleave", domManipulation.hideProjectIcons);

// Add project when user click on Plus icon in projects
const addProject = document.querySelector(".add-project");
addProject.addEventListener("click", domManipulation.showProjectForm);

// get project data for further use when user press add button
const projectsContainer = document.querySelector(".projects-container");
const addProjectBtn = document.querySelector(".add-project-btn");

projectsContainer.addEventListener("submit", (event) => {
     const projectData = domManipulation.getProjectData(event);
     console.log(projectData);
     projectManager.saveProject(projectData);
     domManipulation.addProjectToDom(projectData);
});

// Todo... hide/show delete icon on mouseover/mouseleave
// Show/hide project delete icon on mouseover/mouseleave

// Cancel adding of the project
projectsContainer.addEventListener("click", domManipulation.cancelProject);

// TODO... Toggle projects list
// Toggle projects list on "Chevron Icon" click
const toggleProjectsList = document.querySelector(".toggle-projects-list");
// toggleProjectsList.addEventListener('click', domManipulation.toggleProjectsList)

// Delete project on cross icon click against each project name
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".project-last-icon")) {
          const projectId = event.target.parentNode.id;
          domManipulation.deleteProject(event);
          projectManager.deleteProjectFromList(projectId);
     }
});

// TODO...  Display project tasks in content-container on respective project click
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".new-project-container")) {
          const projectId = event.target.id;
          const projectName = projectManager.getProjectName(projectId);
          const projectTaskList = todoListManager.getTaskList(projectName);

          // First clear the content container from any previous content
          domManipulation.clearContentContainer();

          // Then display project tasks in content area
          domManipulation.displayProjectTasks(projectName, projectTaskList);
     }
});
