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

     const getTaskData = function (projectId, taskId) {
          for (let taskData of projectTaskList[projectId]) {
               if (taskData.taskId === taskId) {
                    return taskData;
               }
          }
          return "-1";
     };
     const getprojectTaskList = function () {
          return projectTaskList;
     };
     const addProjectTask = function (taskData) {
          projectTaskList[taskData.projectId].push(taskData);
          updateLocalStorage();
     };

     const updateTask = function (taskData) {
          const project = projectTaskList[taskData.projectId];
          for (let i = 0; i < project.length; i++) {
               if (project[i].taskId === taskData.taskId) {
                    project[i] = taskData;
               }
          }
          // Update local storage to sync changes
          updateLocalStorage();
     };

     const deleteProjectTask = function (projectId, taskId) {
          const project = projectTaskList[projectId];
          for (let i = 0; i < project.length; i++) {
               if (project[i].taskId === taskId) {
                    project.splice(i, 1);
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
          getTaskData,
          getprojectTaskList,
          updateTask,
     };
})();

export default todoListManager;
