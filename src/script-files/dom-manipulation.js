// Import required assets for header section
import menuIcon from "../assets/header/menu-icon.svg";
import homeIcon from "../assets/header/home.svg";
import searchIcon from "../assets/header/search.svg";
import userIcon from "../assets/header/user-icon.svg";

// Import required assets for sidebar section
import plusIconPath from "../assets/sidebar/plus.svg";
import chevronDownPath from "../assets/sidebar/chevron-down.svg";
import chevronLeftPath from "../assets/sidebar/chevron-left.svg";

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
          const projects = document.createElement("div");

          // Add classes
          todayTask.classList.add("sidebar-item", "today-task");
          thisWeekTasks.classList.add("sidebar-item", "this-week-tasks");
          allTasks.classList.add("sidebar-item", "all-taks");
          projects.classList.add("sidebar-item", "projects");

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

          // Append them to their parent
          projects.append(projectText, projectPlusIcon, projectChevronIcon);

          // Append sidebar children
          sidebarContainer.append(todayTask, thisWeekTasks, allTasks, projects);
     };

     // Toggle sidebar container on 'menu icon' click
     const toggleSidebar = function () {
          const sidebarContainer = document.querySelector(".sidebar-container");
          sidebarContainer.classList.toggle("toggle");
     };

     // show/hide projects' add icons on mouse enter to/leave from sidebar container
     const showProjectIcons = function () {
          const projects = document.querySelector(".projects");
          projects.querySelectorAll("img").forEach((image) => {
               image.classList.add("show-icon");
          });
     };

     const hideProjectIcons = function () {
          const projects = document.querySelector(".projects");
          projects.querySelectorAll("img").forEach((image) => {
               image.classList.remove("show-icon");
          });
     };

     return {
          setPageStructure,
          setHeaderStructure,
          setSidebarStructure,
          toggleSidebar,
          showProjectIcons,
          hideProjectIcons,
     };
})();

export default domManipulation;
