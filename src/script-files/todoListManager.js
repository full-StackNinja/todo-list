const todoListManager = (function () {
     const populateLocalStorage = function () {
          let projectTaskList;
          if (localStorage.getItem("projectTaskList")) {
               const projectTaskListJson = localStorage.getItem("projectTaskList");
               projectTaskList = JSON.parse(projectTaskListJson);
          } else {
               projectTaskList = {};
          }
          return projectTaskList;
     };

     const projectTaskList = populateLocalStorage();

     const updateLocalStorage = function () {
          const projectTaskListJson = JSON.stringify(projectTaskList);
          localStorage.setItem("projectTaskList", projectTaskListJson);
     };

     const addProject = function (projectId) {
          projectTaskList[projectId] = [];
          updateLocalStorage();
     };

     const deleteProject = function (projectId) {
          delete projectTaskList[projectId];
          updateLocalStorage();
     };
     const getTaskList = function (projectId) {
          return projectTaskList[projectId];
     };

     const getprojectTaskList = function () {
          return projectTaskList;
     };
     const addProjectTask = function (taskData) {
          projectTaskList[taskData.projectId].push(taskData);
          updateLocalStorage();
     };

     const deleteProjectTask = function (projectId, taskId) {
          for (let task of projectTaskList[projectId]) {
               if (task.taskId === taskId) {
                    projectTaskList[projectId].splice(task, 1);
                    updateLocalStorage();
               }
          }
     };

     return {
          populateLocalStorage,
          updateLocalStorage,
          addProject,
          deleteProject,
          deleteProjectTask,
          addProjectTask,
          getTaskList,
          getprojectTaskList,
     };
})();

export default todoListManager;
