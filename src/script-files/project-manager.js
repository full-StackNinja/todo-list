const projectManager = (function () {
     const projectsList = []
     const saveProject = function (projectData) {
        projectsList.push(projectData)
     }  
     return {saveProject}
})()

export default projectManager;