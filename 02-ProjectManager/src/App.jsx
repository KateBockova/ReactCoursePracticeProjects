import { useState, useRef } from "react";

import EditProject from "./components/EditProject";
import Navigation from "./components/Navigation";
import NewProjectForm from "./components/NewProjectForm";
import NoProject from "./components/NoProject";

function App() {
  const [projectAction, setProjectAction] = useState("noProject");
  const [projects, setProjects] = useState([
    {
      title: "First Project",
      description: "Some info",
      dueDate: "2023-03-15",
      tasks: ["Task 1", "Task 2"]
    }
  ]);
  const [projectIndex, setProjectIndex] = useState();

  const newProjectRefs = {
    projectTitle: useRef(),
    projectDescription: useRef(),
    projectDueDate: useRef()
  }
  const projectTask = useRef();
  const dialog = useRef();


  function handleNoProject() {
    setProjectAction("noProject");
  }

  function handleAddPoject() {
    setProjectAction("newProject")
  }

  function handleProjectClick(i) {
    setProjectIndex(i);
    setProjectAction("editProject");
  }

  function handleSaveProject(event) {
    event.preventDefault()
    const projectTitle = newProjectRefs.projectTitle.current.value.trim();
    const projectDescription = newProjectRefs.projectDescription.current.value.trim();
    const projectDueDate = newProjectRefs.projectDueDate.current.value;

    if (projectTitle && projectDescription && projectDueDate) {
      setProjects(previousProjects => {
        const updatedProjects = [...previousProjects];
        updatedProjects.push({
          title: projectTitle,
          description: projectDescription,
          dueDate: projectDueDate,
          tasks: []
        });
        return updatedProjects
      });
      setProjectIndex(projects.length);
      setProjectAction("editProject");
    } else {
      dialog.current.showModal()
    }
  }

  function handleDeleteProject() {
    setProjects(previousProjects => {
      const updatedProjects = [...previousProjects];
      updatedProjects.splice(projectIndex, 1);
      return updatedProjects
    });
    setProjectAction("noProject")
  }

  function handleAddTask() {
    let newProjectTask = projectTask.current.value.trim();
    if (newProjectTask) {
      setProjects(previousProjects => previousProjects.map((project, index) => index === projectIndex
        ? {
          ...project,
          tasks: project.tasks.concat(newProjectTask)
        }
        : project
      ));
      projectTask.current.value = "";
    } else {
      dialog.current.showModal()
    }
  }

  function handleClearTask(i) {
    setProjects(previousProjects => previousProjects.map((project, index) => index === projectIndex
      ? {
        ...project,
        tasks: project.tasks.toSpliced(i, 1)
      }
      : project
    ));
  }

  console.log(projects);

  return (
    <>
      <Navigation onAdd={handleAddPoject} onProjectClick={handleProjectClick} projects={projects} index={projectIndex} />
      <div className="ml-40 sm:ml-48 md:ml-56 lg:ml-64 py-20 px-8 md:pr-14 lg:pr-24 text-stone-600">
        {projectAction === "noProject" && <NoProject onCreate={handleAddPoject} />}
        {projectAction === "newProject" && <NewProjectForm onCancel={handleNoProject} onSave={handleSaveProject} projectRefs={newProjectRefs} dialog={dialog} />}
        {projectAction === "editProject" && <EditProject onDelete={handleDeleteProject} onAddTask={handleAddTask} onTaskClear={handleClearTask} project={projects[projectIndex]} projectTask={projectTask} dialog={dialog} />}
      </div>
    </>
  );
}

export default App;