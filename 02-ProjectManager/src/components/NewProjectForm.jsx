import InputModal from "./InputModal";

export default function NewProjectForm({ onCancel, onSave, projectRefs, dialog }) {
    const inputClasses = "bg-stone-200 border-b-2 border-stone-300 focus:border-stone-500 focus:!outline-none mb-3 p-1";
    const labelClasses = "font-bold uppercase";

    return (
        <>
            <InputModal dialog={dialog} message="All input fields" />
            <form onSubmit={onSave}>
                <div className="text-right mb-3">
                    <button type="button" onClick={onCancel} className="hover:bg-stone-200 rounded-lg py-1 px-2 m-2">Cancel</button>
                    <button type="submit" className="text-white bg-stone-800 hover:bg-stone-700 rounded-lg px-6 py-1.5">Save</button>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className={labelClasses}>Title</label>
                    <input ref={projectRefs.projectTitle} type="text" id="title" className={inputClasses} required />
                    <label htmlFor="description" className={labelClasses}>Description</label>
                    <textarea ref={projectRefs.projectDescription} type="text" id="description" className={inputClasses} required />
                    <label htmlFor="due-date" className={labelClasses}>Due Date</label>
                    <input ref={projectRefs.projectDueDate} type="date" id="due-date" className={inputClasses} required />
                </div>
            </form>
        </>
    )
}