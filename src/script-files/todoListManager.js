const todoListManager = (function () {

     const updateLocalStorage = function (projectTaskList) {
          const projectTaskListJson = JSON.stringify(projectTaskList)
          localStorage.setItem('projectTaskList', projectTaskListJson)
     }
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

     const addProject = function (projectId) {
          projectTaskList[projectId] = [];
          updateLocalStorage(projectTaskList)
     };

     const deleteProject = function (projectId) {
          delete projectTaskList[projectId];
          updateLocalStorage(projectTaskList)
     };
     const getTaskList = function (projectId) {
          return projectTaskList[projectId];
     };

     const getprojectTaskList = function () {
          return projectTaskList
     }
     const addProjectTask = function (taskData) {
          projectTaskList[taskData.projectId].push(taskData);
          updateLocalStorage(projectTaskList)
     };

     const deleteProjectTask = function (projectId, taskId) {
          for (let task of projectTaskList[projectId]) {
               if (task.id === taskId) {
                    projectTaskList[projectId].splice(task, 1);
                    updateLocalStorage(projectTaskList)
               }
          }
     };

     return {
          populateLocalStorage,
          addProject,
          deleteProject,
          deleteProjectTask,
          addProjectTask,
          getTaskList,
          getprojectTaskList,
     };
})();

export default todoListManager;
