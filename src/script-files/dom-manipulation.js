// Import required assets for header section
import menuIcon from "../assets/header/menu-icon.svg"
import homeIcon from "../assets/header/home.svg"
import searchIcon from "../assets/header/search.svg"
import userIcon from "../assets/header/user-icon.svg"

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
          headerContainer.classList.add("page-header-container");
          sidebarContainer.classList.add("page-sidebar-container");
          contentContainer.classList.add("content-container");

          // Define parent-child relationship for above containers
          pageContainer.appendChild(headerContainer);
          pageContainer.appendChild(sidebarContainer);
          pageContainer.appendChild(contentContainer);

          // Finally attach parent Container to the body of the page.
          document.body.appendChild(pageContainer);
     };

     // Set header structure
     const setHeaderStructure = function () {

          const menuIcon = 
          
     }
})();
