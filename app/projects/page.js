
import NotionProjects from "../components/projects/notionProjects";


export default async function Projects() {

    return (
        <>
            <div className="bg-white ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Development projects, each with its unique summary, tech, and link.</p>
                    </div>
                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                        <NotionProjects />
                    </div>
                </div>
            </div>
        </>
    )
}