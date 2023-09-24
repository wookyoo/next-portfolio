// import { TOKEN, DATABASE_ID } from "../../lib/config.js";
import ProjectItem from "./project-item.js";


export default async function NotionProjects() {
    const data = await getData()

    console.log(data);

    return (
        <>
            {data.results ? data.results.map((project) => (
                <ProjectItem key={project.id} data={project}/>
            )) : null}
        </>
    )
}

// called at build stage
export async function getData() {

    var TOKEN = process.env.NOTION_TOKEN;
    var DATABASE_ID = process.env.NOTION_DATABASE_ID;

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