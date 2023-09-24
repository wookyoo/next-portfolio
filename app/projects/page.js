import { TOKEN, DATABASE_ID } from "../lib/config.js";
import ProjectItem from "../components/projects/project-item";


export default async function Projects() {
    const data = await getData()

    return (
        <>
            <div className="bg-white ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Development projects, each with its unique summary, tech, and link.</p>
                    </div>
                    <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {data.results.map((project) => (
                            <ProjectItem key={project.id} data={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

// called at build stage
export async function getData() {

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    // console.log(res);

    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

    const data = await res.json()

    // const projectsNames = data.results.map((project) => (
    //     console.log(project.properties.Tags.multi_select)
    // ));
    // console.log(`projectsNames: ${projectsNames}`)

    return data
}