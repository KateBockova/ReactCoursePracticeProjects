export default function Navigation({ onAdd, onProjectClick, projects, index }) {
    return (
        <nav className="fixed top-7 left-0 w-40 sm:w-48 md:w-56 lg:w-64 h-screen rounded-tr-xl px-3 md:px-6 py-10 bg-stone-900">
            <h2 className="uppercase font-bold text-stone-50 pb-7">Your Projects</h2>
            <button onClick={onAdd} className="text-stone-400 bg-stone-700 rounded-lg px-2 py-1.5 mb-8 hover:bg-stone-600 hover:text-stone-300">+ Add Project</button>
            <ul>
                {projects.map((project, i) => (
                    <li key={i}>
                        <button onClick={() => onProjectClick(i)} className={`${i === index ? "text-stone-100 hover:text-white" : "text-stone-400 hover:text-stone-300"} bg-stone-800 w-full text-start pl-1 py-1.5 mb-2`}>{project.title}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}