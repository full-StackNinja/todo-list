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

// If projects already created then load them and display
// them in projects area on page load
let projectId = 0;
if (JSON.parse(localStorage.getItem("projectsList"))) {
     const projectsList = projectManager.geProjectsList();

     // get max project Id in order to assign ids to new projects next to that.
     for (let project of projectsList) {
          if (Number(project.id) > projectId) {
               projectId = Number(project.id);
          }
     }

     domManipulation.setProjectId(projectId);

     // Now display already created projects to DOM
     domManipulation.displayProjectsToDom(projectsList);
}

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
const projectChevronIcon = document.querySelector(".toggle-projects-list");
projectChevronIcon.addEventListener("click", domManipulation.toggleProjectsList);

// Delete project on cross icon click against each project name
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".project-last-icon")) {
          const deletedProjectId = event.target.parentNode.id;

          // First check whether deleted project was being displayed in content area
          // If yes then update content container with default display
          const contentContainer = document.querySelector(".content-container");
          const projectHeading = document.querySelector(".project-heading");
          const exProjectId = projectHeading.getAttribute("data-project-id");

          // If displayed project is being deleted then replace tasks with all tasks
          if (deletedProjectId === exProjectId) {
               displayAllTasks();
          }

          // Then delete the project
          domManipulation.deleteProject(event);
          projectManager.deleteProjectFromList(deletedProjectId);
          todoListManager.deleteProject(deletedProjectId);
     }
});

const displayProjectTAsks = function (event) {
     const projectId = event.target.id;
     const projectName = projectManager.getProjectName(projectId);
     const projectTaskList = todoListManager.getTaskList(projectId);

     let taskId = 0;
     if (projectTaskList.length) {
          for (let task of projectTaskList) {
               if (Number(task.taskId) > taskId) taskId = Number(task.taskId);
          }
     }
     domManipulation.setTaskId(taskId);

     // First clear the content container from any previous content
     domManipulation.clearContentContainer();

     // Then display project tasks in content area
     domManipulation.displayProjectTasks(projectName, projectId, projectTaskList);
};

// TODO...  Display project tasks in content-container on respective project click
projectsContainer.addEventListener("click", (event) => {
     if (event.target.matches(".new-project-container")) {
          displayProjectTAsks(event);
     }
});

// TODO... Show task form in respective project when user clicks on "Add Task" element
const contentContainer = document.querySelector(".content-container");
contentContainer.addEventListener("click", (event) => {
     if (event.target.matches(".add-task")) {
          domManipulation.showTaskForm();
     }
});

// Todo... get data from task form when user clicks on add button and then display to DOM
contentContainer.addEventListener("submit", (event) => {
     if (event.target.matches(".task-form")) {
          event.preventDefault();
          const taskData = domManipulation.getTaskData();
          domManipulation.addTaskToDom(taskData);
          todoListManager.addProjectTask(taskData);
     }
});

// Display edited task
contentContainer.addEventListener("submit", (e) => {
     if (e.target.matches(".edit-task-form")) {
          e.preventDefault();
          const taskData = domManipulation.getEditTaskData(e);

          // Update task in content container
          domManipulation.updateTask(taskData);

          // Also update task in todo listmanager
          todoListManager.updateTask(taskData);
     }
});

// TODO... Cancel updating task
contentContainer.addEventListener("reset", (e) => {
     if (e.target.matches(".edit-task-form")) {
          e.preventDefault();
          const taskId = e.target.id;
          const projectId = e.target.getAttribute("data-project-id");

          const taskData = todoListManager.getTaskData(projectId, taskId);

          e.target.parentNode.removeChild(e.target);

          domManipulation.updateTask(taskData);
     }
});

// TODO... Display task in detail when user click on the respective task

contentContainer.addEventListener("click", (e) => {
     if (e.target.matches(".task-container")) {
          const taskId = e.target.id;
          const projectId = e.target.getAttribute("data-project-id");

          const taskData = todoListManager.getTaskData(projectId, taskId);
          domManipulation.expandTask(taskData);
     }
});

// Edit task when in expand mode
contentContainer.addEventListener("click", (e) => {
     if (e.target.matches(".task-long-detail")) {
          const taskId = e.target.id;
          const projectId = e.target.getAttribute("data-project-id");
          const taskData = todoListManager.getTaskData(projectId, taskId);
          domManipulation.editTask(taskData);
     }
});

// TODO... Cancel task when user clicks cancel btn on task form
contentContainer.addEventListener("reset", (event) => {
     if (event.target.matches(".task-form")) {
          domManipulation.cancelTaskForm();
     }
});

// TODO... Delete task when user clicks on delete icon
contentContainer.addEventListener("click", (e) => {
     if (e.target.matches(".delete-task")) {
          const contentContainer = document.querySelector(".content-container");

          const taskId = e.target.parentNode.id;
          const projectId = e.target.parentNode.getAttribute("data-project-id");

          contentContainer.removeChild(e.target.parentNode);
          todoListManager.deleteProjectTask(projectId, taskId);
     }
});

// Update due-date when user clicks on due date on respective task
contentContainer.addEventListener("change", (event) => {
     if (event.target.matches(".task-due-date")) {
          const newDate = event.target.value;
          const projectId = event.target.parentNode.parentNode.getAttribute("data-project-id");
          const taskId = event.target.parentNode.parentNode.id;
          const taskList = todoListManager.getTaskList(projectId);

          // find task to update it's dueDate
          for (let task of taskList) {
               if (task.taskId === taskId) {
                    task.dueDate = newDate;
               }
          }
          // Also update local storage
          todoListManager.updateLocalStorage();
     }
});

// TODO... Add tasks to today project which fall in today's date
const todayTask = document.querySelector(".today-task");
todayTask.addEventListener("click", () => {
     const todayDate = new Date().toDateString();
     const taskList = [];
     const projectTaskObject = todoListManager.getprojectTaskList();
     const projectTaskList = Object.values(projectTaskObject);

     for (let projectTasks of projectTaskList) {
          for (let task of projectTasks) {
               let date = new Date(task.dueDate);
               date = date.toDateString();
               if (date === todayDate) {
                    taskList.push(task);
               }
          }
     }

     taskList.sort((a, b) => {
          // Convert date string to Time Stamp to make numeric comparison
          const aNew = new Date(a.dueDate).getTime();
          const bNew = new Date(b.dueDate).getTime();
          return aNew - bNew;
     });

     // First clear content area if already filled
     domManipulation.clearContentContainer();

     // Then display today's tasks
     domManipulation.displayTodaysTask(taskList);
});

const displayAllTasks = function () {
     const taskList = [];
     const projectTaskObject = todoListManager.getprojectTaskList();
     const projectTaskList = Object.values(projectTaskObject);
     for (let projectTasks of projectTaskList) {
          for (let task of projectTasks) {
               taskList.push(task);
          }
     }

     taskList.sort((a, b) => {
          // Convert date string to Time Stamp to make numeric comparison
          const aNew = new Date(a.dueDate).getTime();
          const bNew = new Date(b.dueDate).getTime();
          return aNew - bNew;
     });

     // First clear content area if already filled
     domManipulation.clearContentContainer();
     // Then display all tasks
     domManipulation.displayAllTasks(taskList);
};
// By default, on window reload and reopen, display all tasks
window.onload = displayAllTasks;

// todo... Display all tasks when user clicks on "All Tasks" tab
const allTasks = document.querySelector(".all-tasks");
allTasks.addEventListener("click", displayAllTasks);

// TODO... Display this week tasks when user clicks on 'this week' tab
const thisWeekTasks = document.querySelector(".this-week-tasks");
thisWeekTasks.addEventListener("click", () => {
     const todayDate = new Date();
     todayDate.setHours(0, 0, 0, 0);
     const oneWeekAhead = new Date(todayDate);
     oneWeekAhead.setDate(oneWeekAhead.getDate() + 7);

     const taskList = [];
     const projectTaskObject = todoListManager.getprojectTaskList();
     const projectTaskList = Object.values(projectTaskObject);

     for (let projectTasks of projectTaskList) {
          for (let task of projectTasks) {
               const date = new Date(task.dueDate);
               date.setHours(0, 0, 0, 0);
               if (date >= todayDate && date <= oneWeekAhead) {
                    taskList.push(task);
               }
          }
     }

     //Sort tasks in ascending order of the due date
     taskList.sort((a, b) => {
          // Convert date string to Time Stamp to make numeric comparison
          const aNew = new Date(a.dueDate).getTime();
          const bNew = new Date(b.dueDate).getTime();
          return aNew - bNew;
     });

     // First clear content container
     domManipulation.clearContentContainer();

     // Then display tasks which fall under one week ahead from today
     domManipulation.displayThisWeekTasks(taskList);
});
