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

     // Show addTask form
     const showAddTaskForm = function () {
          // TODO - show task form stuff here
     };

     // Get taskForm data

     const getTaskFormData = function () {
          // TODO - related stuff here
     };
     // Count total projects
     let projectCount = 0;
     const showProjectForm = function () {
          const projectsContainer = document.querySelector(".projects-container");

          const projectForm = document.createElement("form");
          const projectName = document.createElement("input");
          const projectBtns = document.createElement("div");
          const addBtn = document.createElement("button");
          const cancelBtn = document.createElement("button");

          projectName.type = "text";
          projectName.name = `new-project`;
          projectName.id = `${projectCount++}`;
          projectName.classList.add("project-name-field");
          projectName.placeholder = "Project Name";

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

     const cancelProject = function (event) {
          if (event.target.matches('.cancel-project-btn')) {
               const projectsContainer  = document.querySelector('.projects-container')
               const projectForm = document.querySelector('.project-form')
               projectsContainer.removeChild(projectForm)
          }
     };

     const showProjectRemoveIcon = function (event) {
          // const newProjectContainer = document.querySelector(".new-project-container");
          console.log("onmouseover: ", event.target);
          // console.log("relatedtarget:", event.relatedTarget)
          // if (event.target === newProjectContainer) {
          const removeIcon = document.querySelector(".project-last-icon");
          removeIcon.classList.toggle("show-remove-icon");
          // }
     };

     const hideProjectRemoveIcon = function (event) {
          // console.log("onmouseover relatedtarget: ", event.relatedTarget);
          // const newProjectContainer = document.querySelector(".new-project-container");
          // if (event.relatedTarget === newProjectContainer) {
          const removeIcon = document.querySelector(".project-last-icon");
          removeIcon.classList.toggle("show-remove-icon");
          // }
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
     };
})();

export default domManipulation;
