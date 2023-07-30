const projectManager = (function () {
     const projectsList = [];
     const saveProject = function (projectData) {
          projectsList.push(projectData);
     };

     const deleteProjectFromList = function (projectId) {
          for (let project of projectsList) {
               if (project.id === projectId) {
                    projectsList.splice(projectsList.indexOf(project), 1);
               }
          }
     };

     return { saveProject, deleteProjectFromList };
})();

export default projectManager;
