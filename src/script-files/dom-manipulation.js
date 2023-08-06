// Import required assets for header section
import menuIcon from "../assets/header/menu-icon.svg";
import homeIcon from "../assets/header/home.svg";
import searchIcon from "../assets/header/search.svg";
import userIcon from "../assets/header/user-icon.svg";

// Import required assets for sidebar section
import plusIconPath from "../assets/sidebar/plus.svg";
import chevronDownPath from "../assets/sidebar/chevron-down.svg";
import chevronLeftPath from "../assets/sidebar/chevron-left.svg";
import projectListIcon from "../assets/sidebar/circle-outline.svg";
import removeIcon from "../assets/sidebar/close.svg";

// Import required assets for content section
import taskPlusIcon from "../assets/content/plus.svg";

// IIFE Module for all the dom-manipulation related tasks
const domManipulation = (function () {
     // Set overall page structure
     const setPageStructure = function () {
          // create Container Elements
          const pageContainer = document.createElement("div");
          const headerContainer = document.createElement("header");
          const sidebarContainer = document.createElement("div");
          const contentContainer = document.createElement("main");

          // Add classes to each container
          pageContainer.classList.add("page-container");
          headerContainer.classList.add("header-container");
          sidebarContainer.classList.add("sidebar-container");
          contentContainer.classList.add("content-container");

          // Define parent-child relationship for above containers
          pageContainer.appendChild(headerContainer);
          pageContainer.appendChild(sidebarContainer);
          pageContainer.appendChild(contentContainer);

          // Finally attach parent Container to the body of the page.
          document.body.appendChild(pageContainer);
     };

     // Add header items
     const setHeaderStructure = function () {
          const headerContainer = document.querySelector(".header-container");

          const headerLeft = document.createElement("div");
          const headerRight = document.createElement("div");
          const searchBarContainer = document.createElement("div");

          headerLeft.classList.add("header-left");
          headerRight.classList.add("header-right");
          searchBarContainer.classList.add("searchbar-container");

          const loginBtn = document.createElement("button");
          const signupBtn = document.createElement("button");
          const searchBar = document.createElement("input");

          const menuItem = new Image();
          const homeItem = new Image();
          const searchItem = new Image();
          const userPicture = new Image();

          menuItem.src = menuIcon;
          homeItem.src = homeIcon;
          searchItem.src = searchIcon;
          userPicture.src = userIcon;

          menuItem.classList.add("menu-item", "header-item");
          homeItem.classList.add("home-item", "header-item");
          searchBar.classList.add("search-bar", "header-item");
          searchItem.classList.add("search-item");

          loginBtn.classList.add("login-button", "header-item");
          signupBtn.classList.add("signup-button", "header-item");
          userPicture.classList.add("user-picture", "header-item");

          searchBar.type = "search";

          // Append search items to searchbar container
          searchBarContainer.append(searchItem, searchBar);

          loginBtn.textContent = "Login";
          signupBtn.textContent = "Sign up";

          // Append  left side and right side items to parents
          headerLeft.append(menuItem, homeItem, searchBarContainer);
          headerRight.append(loginBtn, signupBtn, userPicture);

          // Append header left and right to header container
          headerContainer.append(headerLeft, headerRight);
     };

     // Add sidebar items
     const setSidebarStructure = function () {
          // Call sidebar container
          const sidebarContainer = document.querySelector(".sidebar-container");

          const todayTask = document.createElement("div");
          const thisWeekTasks = document.createElement("div");
          const allTasks = document.createElement("div");
          const projectsContainer = document.createElement("div");
          const projectsHeader = document.createElement("div");
          // Add classes
          todayTask.classList.add("sidebar-item", "today-task");
          thisWeekTasks.classList.add("sidebar-item", "this-week-tasks");
          allTasks.classList.add("sidebar-item", "all-tasks");
          projectsHeader.classList.add("projects-header");
          projectsContainer.classList.add("projects-container");

          // Add tabindex attributes to make them focusable
          todayTask.setAttribute("tabindex", "-1");
          thisWeekTasks.setAttribute("tabindex", "-1");
          allTasks.setAttribute("tabindex", "-1");
          projectsHeader.setAttribute("tabindex", "-1");
          projectsContainer.setAttribute("tabindex", "-1");

          const todayTaskIcon = document.createElement("span");
          const todayTaskText = document.createElement("span");

          todayTaskIcon.innerHTML = "&#x23F0";
          todayTaskText.innerHTML = "Today";

          // Append to their immediate parent
          todayTask.append(todayTaskIcon, todayTaskText);

          const thisWeekIcon = document.createElement("span");
          const thisWeekText = document.createElement("span");

          thisWeekIcon.innerHTML = "&#x1F5D3";
          thisWeekText.innerHTML = "This Week";

          // Append them to their immediate parent
          thisWeekTasks.append(thisWeekIcon, thisWeekText);

          const allTasksIcon = document.createElement("span");
          const allTasksText = document.createElement("span");

          allTasksIcon.innerHTML = "&#x1F4DC";
          allTasksText.innerHTML = "All Tasks";

          // Append to their parent
          allTasks.append(allTasksIcon, allTasksText);

          const projectText = document.createElement("span");
          const projectPlusIcon = new Image();
          const projectChevronIcon = new Image();

          projectText.innerHTML = "Projects";
          projectPlusIcon.src = plusIconPath;
          projectChevronIcon.src = chevronDownPath;

          // Add classes
          projectText.classList.add("projects-heading");
          projectPlusIcon.classList.add("add-project");
          projectChevronIcon.classList.add("toggle-projects-list");

          // Append them to their parent
          projectsHeader.append(projectText, projectPlusIcon, projectChevronIcon);

          // Append projects header to projectsContainer
          projectsContainer.appendChild(projectsHeader);

          // Append sidebar children
          sidebarContainer.append(todayTask, thisWeekTasks, allTasks, projectsContainer);
     };

     // Toggle sidebar container on 'menu icon' click
     const toggleSidebar = function () {
          const sidebarContainer = document.querySelector(".sidebar-container");
          sidebarContainer.classList.toggle("toggle");
     };

     // show/hide projects' add icons on mouse enter to/leave from sidebar container
     const showProjectIcons = function () {
          const projectsHeader = document.querySelector(".projects-header");
          projectsHeader.querySelectorAll("img").forEach((image) => {
               image.classList.add("show-icon");
          });
     };

     const hideProjectIcons = function () {
          const projectsHeader = document.querySelector(".projects-header");
          projectsHeader.querySelectorAll("img").forEach((image) => {
               image.classList.remove("show-icon");
          });
     };

     let projectId;
     const setProjectId = function (previousMaxId) {
          projectId = previousMaxId;
     };
     const showProjectForm = function () {
          const projectsContainer = document.querySelector(".projects-container");

          const projectForm = document.createElement("form");
          const projectName = document.createElement("input");
          const projectBtns = document.createElement("div");
          const addBtn = document.createElement("button");
          const cancelBtn = document.createElement("button");

          projectName.type = "text";
          projectName.name = `new-project`;
          projectName.id = `${++projectId}`;
          projectName.classList.add("project-name-field");
          projectName.placeholder = "Project Name";
          projectName.required = true;

          addBtn.type = "submit";
          addBtn.innerHTML = "Add";
          cancelBtn.type = "reset";
          cancelBtn.innerHTML = "Cancel";

          // Add classes
          projectForm.classList.add("project-form");
          projectBtns.classList.add("project-btns");
          addBtn.classList.add("add-project-btn");
          cancelBtn.classList.add("cancel-project-btn");

          // Append children
          projectBtns.append(cancelBtn, addBtn);

          // Append children
          projectForm.append(projectName, projectBtns);

          // Append project name input field to projects container
          projectsContainer.appendChild(projectForm);
     };

     const getProjectData = function (event) {
          const projectsContainer = document.querySelector(".projects-container");
          const projectName = document.querySelector(".project-name-field");
          event.preventDefault();
          const projectData = {};
          projectData.name = projectName.name;
          projectData.id = projectName.id;
          projectData.value = projectName.value;

          // After getting data remove project Form
          projectsContainer.removeChild(projectsContainer.lastChild);
          return projectData;
     };

     const addProjectToDom = function (projectData) {
          const projectsContainer = document.querySelector(".projects-container");

          const newProjectContainer = document.createElement("div");
          newProjectContainer.id = `${projectData.id}`;
          newProjectContainer.classList.add("new-project-container");
          newProjectContainer.setAttribute("tabindex", "-1");

          const projectIcon = new Image();
          const removeProject = new Image();

          projectIcon.src = projectListIcon;
          removeProject.src = removeIcon;

          projectIcon.style.width = "20rem";
          removeProject.style.width = "20rem";
          projectIcon.classList.add("project-first-icon");
          removeProject.classList.add("project-last-icon");

          const newProject = document.createElement("span");
          newProject.classList.add("new-project");

          newProject.innerHTML = `${projectData.value}`;

          newProjectContainer.append(projectIcon, newProject, removeProject);

          projectsContainer.appendChild(newProjectContainer);
     };

     const displayProjectsToDom = function (projectsList) {
          for (let project of projectsList) {
               addProjectToDom(project);
          }
     };

     const cancelProject = function (event) {
          if (event.target.matches(".cancel-project-btn")) {
               const projectsContainer = document.querySelector(".projects-container");
               const projectForm = document.querySelector(".project-form");
               projectsContainer.removeChild(projectForm);
          }
     };

     const showProjectRemoveIcon = function (event) {
          event.target.lastChild.classList.add("show-remove-icon");
     };

     const hideProjectRemoveIcon = function (event) {
          event.target.lastChild.classList.remove("show-remove-icon");
     };

     const deleteProject = function (event) {
          const projectsContainer = document.querySelector(".projects-container");
          projectsContainer.removeChild(event.target.parentNode);
     };

     const clearContentContainer = function () {
          const contentContainer = document.querySelector(".content-container");
          while (contentContainer.firstChild) {
               contentContainer.removeChild(contentContainer.lastChild);
          }
     };

     const truncateText = (text, charLimit) => {
          if (text.length <= charLimit) return text;
          else return text.slice(0, charLimit) + "...";
     };
     // TODO... Create task element from task object
     const getShortTaskDetail = function (task) {
          const taskContainer = document.createElement("div");
          const title = document.createElement("p");
          const description = document.createElement("p");
          const dueDate = document.createElement("input");
          const dateLabel = document.createElement("label");
          const dateContainer = document.createElement("div");
          const charLimit = 60;
          title.innerHTML = task.title;
          description.innerHTML = truncateText(task.description, charLimit);

          dateContainer.classList.add("date-container");
          dateLabel.setAttribute("for", "due-date");
          dateLabel.innerHTML = "due date:  ";
          dueDate.type = "date";
          dueDate.id = "due-date";
          dueDate.name = "due-date";
          dueDate.value = task.dueDate;

          title.classList.add("task-title");
          description.classList.add("task-description");
          dueDate.classList.add("task-due-date");
          taskContainer.id = task.taskId;
          taskContainer.setAttribute("data-project-name", task.projectName);
          taskContainer.setAttribute("data-project-id", task.projectId);
          taskContainer.classList.add("task-container");

          dateContainer.append(dateLabel, dueDate);
          taskContainer.append(title, description, dateContainer);
          return taskContainer;
     };

     let taskId;
     const setTaskId = function (previousTaskId) {
          taskId = previousTaskId;
     };
     // Todo... Show task form
     const showTaskForm = function () {
          const contentContainer = document.querySelector(".content-container");

          const taskForm = document.createElement("form");
          const title = document.createElement("input");
          const description = document.createElement("input");

          const addBtn = document.createElement("button");
          const cancelBtn = document.createElement("button");
          const taskBtns = document.createElement("div");
          const dateContainer = document.createElement("div");
          const dueDateLabel = document.createElement("label");
          const dueDate = document.createElement("input");

          taskForm.classList.add("task-form");
          taskForm.id = `${++taskId}`;
          title.name = "title";
          title.id = "title";
          title.title = "Enter task title";
          title.placeholder = "Title";
          description.name = "desctiption";
          description.id = "description";
          description.title = "Add short description";
          description.placeholder = "Description";

          dateContainer.classList.add("date-container");
          dueDateLabel.setAttribute("for", "due-date");
          dueDateLabel.innerHTML = "due date:";
          dueDate.type = "date";
          dueDate.name = "due-date";
          dueDate.id = "due-date";

          title.required = true;
          dueDate.required = true;

          addBtn.innerHTML = "Add";
          cancelBtn.innerHTML = "Cancel";
          addBtn.type = "submit";
          cancelBtn.type = "reset";
          taskBtns.classList.add("task-btns");
          addBtn.classList.add("add-task-btn");
          cancelBtn.classList.add("cancel-task-btn");

          dateContainer.append(dueDateLabel, dueDate);
          taskBtns.append(cancelBtn, addBtn);
          taskForm.append(title, description, dateContainer, taskBtns);

          // Remove "Add task" element to add taskForm in place of that
          contentContainer.removeChild(contentContainer.lastChild);
          contentContainer.appendChild(taskForm);
     };

     // Todo... get task data on user submit of the form
     const getTaskData = function () {
          const contentContainer = document.querySelector(".content-container");
          const taskForm = document.querySelector(".task-form");
          const projectHeading = document.querySelector(".project-heading");

          const taskData = {};
          taskData.title = taskForm.elements["title"].value;
          taskData.description = taskForm.elements["description"].value;
          taskData.dueDate = taskForm.elements["due-date"].value;
          taskData.taskId = taskForm.id;
          taskData.projectId = projectHeading.getAttribute("data-project-id");
          taskData.projectName = projectHeading.getAttribute("data-project-name");

          // Now delete form and append "add task" element at the end
          contentContainer.removeChild(taskForm);
          contentContainer.appendChild(getAddTaskElement());
          return taskData;
     };

     // todo... Add Task to Dom after user submits task form
     const addTaskToDom = function (task) {
          const contentContainer = document.querySelector(".content-container");
          const taskContainer = getShortTaskDetail(task);
          contentContainer.insertBefore(taskContainer, contentContainer.lastChild);
     };

     // todo... cancel task form on user click on cancel btn
     const cancelTaskForm = function () {
          const contentContainer = document.querySelector(".content-container");
          contentContainer.removeChild(contentContainer.lastChild);

          // Add 'Add task' element at the end
          contentContainer.appendChild(getAddTaskElement());
     };
     const getAddTaskElement = () => {
          const addTask = document.createElement("div");
          const addTaskIcon = new Image();
          const addTaskText = document.createElement("span");
          addTask.classList.add("add-task");
          addTaskIcon.classList.add("add-task-icon");
          addTaskText.classList.add("add-task-text");

          addTaskIcon.src = taskPlusIcon;
          addTaskText.innerHTML = "Add Task";
          addTask.append(addTaskIcon, addTaskText);
          return addTask;
     };
     // TODO... Display respective project tasks in the content area
     const displayProjectTasks = function (projectName, projectId, projectTaskList) {
          const contentContainer = document.querySelector(".content-container");

          // Display Project name on top of project tasks
          const projectHeading = document.createElement("div");
          projectHeading.classList.add("project-heading");
          projectHeading.setAttribute("data-project-id", projectId);
          projectHeading.setAttribute("data-project-name", projectName);
          projectHeading.innerHTML = projectName;
          contentContainer.appendChild(projectHeading);

          // Now loop through tasks list and display them one by one.

          if (projectTaskList.length) {
               for (let task of projectTaskList) {
                    const taskContainer = getShortTaskDetail(task);
                    contentContainer.appendChild(taskContainer);
               }
          }

          contentContainer.appendChild(getAddTaskElement());
     };

     // TODO... Dispay today's tasks
     const displayTodaysTask = function (taskList) {
          const contentContainer = document.querySelector(".content-container");

          // Display "Today" on top of project tasks
          const projectHeading = document.createElement("div");
          projectHeading.classList.add("project-heading");
          projectHeading.innerHTML = "Today";
          contentContainer.appendChild(projectHeading);

          for (let task of taskList) {
               let taskContainer = getShortTaskDetail(task);
               contentContainer.appendChild(taskContainer);
          }
     };

     return {
          setPageStructure,
          setHeaderStructure,
          setSidebarStructure,
          toggleSidebar,
          showProjectIcons,
          hideProjectIcons,
          showProjectForm,
          getProjectData,
          addProjectToDom,
          cancelProject,
          showProjectRemoveIcon,
          hideProjectRemoveIcon,
          deleteProject,
          clearContentContainer,
          displayProjectTasks,
          showTaskForm,
          getTaskData,
          addTaskToDom,
          cancelTaskForm,
          setProjectId,
          displayProjectsToDom,
          setTaskId,
          displayTodaysTask,
     };
})();

export default domManipulation;
