# Todo List

## Brief Intro

-    This project is also a part of theodinproject learning curriculum.
-    The main purpose of the project is to apply JavaScript S.O.L.I.D Principles while writing code in order to make code maintainable and scalable.
- All the content is created dynamically using javascript only.
- Webpack is used for rendering of the content.

## Detailed Explanation

-    The user interface for this project is little bit inspired by [This Todoist](https://todoist.com/app/today).
-    In this project, user can create new todo projects. delete existing projects.
-    When user create project and then click on project name, it displays all the tasks under that project.
-    Also it allows to add new task in that project by clicking on "Add Task".
-    When user clicks on "Add Task", it displays a task form which asks for task title, description(optional) and due date.
-    When user submits form, the task is displayed under that project name.
-    User can also delete task by clicking on delete icon in the task
-    Initially when user creates task it shows short task detail. When user clicks on task, it displays full task detail. upon again clicking on the task, user can edit the task and save updated task again.
-    One can view tasks which falls under todays' date, under coming week or can display all Tasks of all projects.
     -Tasks are displayed in ascending order of the due date set by the user.
     -Due date can be updated again by clicking on the date picker.

## Code Scalability

-    Any change in the DOM stuff is made in separate domManipulation.js module.
-    Projects and todolists are maintained in separeate modules and all the logic is maintained in main index.js file which deals with todolist, projects and DOM stuff simultaneously.

## [Live Preview](https://full-stackninja.github.io/todo-list/)

## Screen Shot

<img src="./Screenshot from 2023-08-08 15-59-01.png">
