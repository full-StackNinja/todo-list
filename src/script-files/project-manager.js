const projectManager = (function () {
     const populateLocalStorage = function () {
          if (localStorage.getItem("projectsList")) {
               const projectsListJson = localStorage.getItem("projectsList");
               const projectsList = JSON.parse(projectsListJson);
               return projectsList;
          } else {
               return [];
          }
     };
     const projectsList = populateLocalStorage();

     const updateLocalStorage = function () {
          const projectsListJson = JSON.stringify(projectsList);
          localStorage.setItem("projectsList", projectsListJson);
     };
     const saveProject = function (projectData) {
          projectsList.push(projectData);
          updateLocalStorage();
     };

     const geProjectsList = function () {
          return projectsList;
     };
     const deleteProjectFromList = function (projectId) {
          for (let project of projectsList) {
               if (project.id === projectId) {
                    projectsList.splice(projectsList.indexOf(project), 1);
                    updateLocalStorage();
               }
          }
     };

     const getProjectName = function (projectId) {
          for (let project of projectsList) {
               if (project.id === projectId) {
                    return project.value;
               }
          }
     };
     return {
          populateLocalStorage,
          saveProject,
          deleteProjectFromList,
          geProjectsList,
          getProjectName,
     };
})();

export default projectManager;
