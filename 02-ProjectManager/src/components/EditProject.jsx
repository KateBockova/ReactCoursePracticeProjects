import InputModal from "./InputModal";

export default function EditProject({ onDelete, onAddTask, onTaskClear, project, projectTask, dialog }) {
    let btnClasses = "hover:bg-stone-200 rounded-lg py-1 px-2 ml-4";

    const formattedDueDate = new Date(project.dueDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return (
        <>
            <InputModal dialog={dialog} />
            <section className="border-b-2 border-b-stone-300 pb-4 mb-5">
                <div className="flex justify-between pb-2">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <button onClick={onDelete} className={btnClasses}>Delete</button>
                </div>
                <p className="text-stone-400 pb-3">{formattedDueDate}</p>
                <p className="whitespace-pre-wrap">{project.description}</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold pb-3">Tasks</h2>
                <input ref={projectTask} type="text" className="bg-stone-200 border-b-2 border-stone-300 focus:border-stone-500 focus:!outline-none mb-8 p-1" required />
                <button type="button" onClick={onAddTask} className={btnClasses}>Add Task</button>
                {project.tasks.length !== 0 &&
                    <ul className="bg-stone-100 rounded-lg py-4 px-3">
                        {project.tasks.map((task, i) => (
                            <li key={i} className="flex justify-between">
                                <p className="content-center">{task}</p>
                                <button onClick={() => onTaskClear(i)} className={btnClasses}>Clear</button>
                            </li>
                        ))}
                    </ul>}
            </section>
        </>
    )
}