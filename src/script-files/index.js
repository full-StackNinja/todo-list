// Import necessary stylesheets
import "../stylesheets/normalize.css";
import "../stylesheets/my-css-reset.css";
import "../stylesheets/typography.css";
import "../stylesheets/index.css";
import "../stylesheets/content-container.css";

// Import Modules into main/index script file
import { format } from "date-fns";
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

// get project data for further use when user press "add button"
const projectsContainer = document.querySelector(".projects-container");
projectsContainer.addEventListener("submit", (event) => {
     if (event.target.matches(".project-form")) {
          const projectData = domManipulation.getProjectData(event);
          // Save project details
          projectManager.saveProject(projectData);
          // Add project to todo Manager to manage todo list of that project
          todoListManager.addProject(projectData.id);
          // Also display project name to DOM
          domManipulation.addProjectToDom(projectData);
     }
});

// Show project delete icon on mouseover
projectsContainer.addEventListener("mouseover", (event) => {
     if (event.target.matches(".new-project-container")) {
          domManipulation.showProjectRemoveIcon(event);
     }
});

// Hide project delete icon on mouse out event*
projectsContainer.addEventListener("mouseout", (event) => {
     if (event.target.matches(".new-project-container") && !event.relatedTarget.matches(".project-last-icon")) {
          domManipulation.hideProjectRemoveIcon(event);
     }
});

// Cancel adding of the project
projectsContainer.addEventListener("click", domManipulation.cancelProject);

// TODO... Toggle projects list on "Chevron Icon" click
const toggleProjectsList = document.querySelector(".toggle-projects-list");
// toggleProjectsList.addEventListener('click', domManipulation.toggleProjectsList)

// Delete project on cross icon click against each project name
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".project-last-icon")) {
          const projectId = event.target.parentNode.id;
          domManipulation.deleteProject(event);
          projectManager.deleteProjectFromList(projectId);
          todoListManager.deleteProject(projectId);
     }
});

// TODO...  Display project tasks in content-container on respective project click
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".new-project-container")) {
          const projectId = event.target.id;
          const projectName = projectManager.getProjectName(projectId);
          const projectTaskList = todoListManager.getTaskList(projectId);

          // First clear the content container from any previous content
          domManipulation.clearContentContainer();

          // Then display project tasks in content area
          domManipulation.displayProjectTasks(projectName, projectId, projectTaskList);
     }
});

// todo... Add event listener to allow user set due date for task...
projectsContainer.addEventListener("change", (event) => {
     if (event.target.matches("#due-date")) {
          const dueDate = document.querySelector("#due-date");
          const selectedDate = new Date(dueDate.value);
          const formatedDate = format(selectedDate);
          dueDate.value = formatedDate;
     }
});

// TODO... Show task form in respective project when user clicks on "Add Task" element
const contentContainer = document.querySelector(".content-container");
contentContainer.addEventListener("click", (event) => {
     if (event.target.matches(".add-task")) {
          domManipulation.showTaskForm(event);
     }
});

// Todo... get data from task form when user clicks on add button...
contentContainer.addEventListener("submit", (event) => {
     if (event.target.matches(".task-form")) {
          event.preventDefault();
          const taskData = domManipulation.getTaskData();
          domManipulation.addTaskToDom(taskData);
          todoListManager.addProjectTask(taskData);
     }
});
