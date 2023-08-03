const todoListManager = (function () {
     const projectList = {};
     const addProject = function (projectId) {
          projectList[projectId] = [];
          console.log("Project Id", projectList);
     };

     const deleteProject = function (projectId) {
          delete projectList[projectId];
     };
     const getTaskList = function (projectId) {
          console.log("taskList", projectList[projectId]);
          return projectList[projectId];
     };

     const addProjectTask = function (projectId, taskData) {
          projectList[projectId].push(taskData);
     };

     const deleteProjectTask = function (projectId, taskId) {
          for (let task of projectList[projectId]) {
               if (task.id === taskId) {
                    projectList[projectId].splice(task, 1);
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
