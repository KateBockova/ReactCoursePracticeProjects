import noProjectImg from "../assets/no-projects.png";

export default function NoProject({ onCreate }) {
    return (
        <section className="place-items-center">
            <img className="size-16 mb-3" src={noProjectImg} alt="No project selected logo" />
            <h2 className="font-bold text-lg mb-3">No Project Selected</h2>
            <p className="mb-7">Select a project or get started with a new one</p>
            <button onClick={onCreate} className="bg-stone-900 hover:bg-stone-700 text-stone-400 hover:text-stone-300 rounded-lg py-1.5 px-3 m-1">Cerate new project</button>
        </section>
    )
}