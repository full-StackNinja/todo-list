// Import required assets for header section
import menuIcon from "../assets/header/menu-icon.svg";
import homeIcon from "../assets/header/home.svg";
import searchIcon from "../assets/header/search.svg";
import userIcon from "../assets/header/user-icon.svg";

// IIFE Module for all the dom-manipulation related tasks
const domManipulation = (function () {
     // Set overall page structure
     const setPageStructure = function () {
          // create Container Elements
          const pageContainer = document.createElement("div");
          const headerContainer = document.createElement("div");
          const sidebarContainer = document.createElement("div");
          const contentContainer = document.createElement("div");

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
     const addHeaderItems = function () {
          const headerContainer = document.querySelector(".header-container");

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
          searchItem.classList.add("search-item", "header-item");
          userPicture.classList.add("user-picture", "header-item");

          loginBtn.classList.add("login-button", "header-item");
          signupBtn.classList.add("signup-button", "header-item");
          searchBar.classList.add("search-bar", "header-item");

          searchBar.type = "search";

          // Append search icon to search bar
          searchBar.appendChild(searchItem);

          loginBtn.textContent = "Login";
          signupBtn.textContent = "Sign up";

          // Append all childen to their parent header container
          headerContainer.append(menuItem, homeItem, searchBar, loginBtn, signupBtn, userPicture);
     };

     // Add sidebar items
     const addSidebarItems = function () {
          
     };

     return {
          setPageStructure,
          addHeaderItems,
     };
})();

export default domManipulation;
