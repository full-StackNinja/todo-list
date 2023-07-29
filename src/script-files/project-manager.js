const projectManager = (function () {
     const projectsList = []
     const saveProject = function (projectData) {
        projectsList.push(projectData)
     }  
     console.log(projectsList)
     return {saveProject}
})()

export default projectManager;