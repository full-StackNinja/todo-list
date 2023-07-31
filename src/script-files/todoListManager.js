const todoListManager = (function () {
     const projectList = {};
     const addProject = function (projectName) {
          projectList[projectName] = [];
     };

     const deleteProject = function (projectName) {
          delete projectList[projectName];
     };
     const getTaskList = function (projectName) {
          return projectList.projectName;
     };

     const addProjectTask = function (projectName, taskData) {
          projectList[projectName].push(taskData);
     };

     const deleteProjectTask = function (projectName, taskId) {
          for (let task of projectList[projectName]) {
               if (task.id === taskId) {
                    projectList[projectName].splice(task, 1);
               }
          }
     };

     return {
          addProject,
          deleteProject,
          deleteProjectTask,
          addProjectTask,
          getTaskList,
     };
})();

export default todoListManager;
