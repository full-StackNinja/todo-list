const todoListManager = (function () {
     const projectTaskList = {};
     const addProject = function (projectId) {
          projectTaskList[projectId] = [];
     };

     const deleteProject = function (projectId) {
          delete projectTaskList[projectId];
     };
     const getTaskList = function (projectId) {
          return projectTaskList[projectId];
     };

     const addProjectTask = function (taskData) {
          projectTaskList[taskData.projectId].push(taskData);
     };

     const deleteProjectTask = function (projectId, taskId) {
          for (let task of projectTaskList[projectId]) {
               if (task.id === taskId) {
                    projectTaskList[projectId].splice(task, 1);
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
