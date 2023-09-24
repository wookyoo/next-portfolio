import Image from 'next/image'

export default function ProjectItem({data}) {
    // console.log(data.properties.Description.rich_text)

    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.rich_text ? data.properties.Description.rich_text[0].plain_text : ''
    const imgUrl = data.cover ? data.cover.external.url : '/'
    const tags = data.properties.Tags.multi_select
    const workType = data.properties.Name.title[0].plain_text
    const link = data.properties.Name.title[0].plain_text

    return (
        <div className="project-card p-4">
            <article className="flex max-w-xl flex-col items-start justify-between">
                {
                    data.cover ? 
                        <Image 
                        src={imgUrl}
                        unoptimized alt="" width={600} height={400}/>
                        : ''
                }
                <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Mar 16, 2020</time>
                </div>
                <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                    <span className="absolute inset-0"></span>
                    {title}
                    </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="flex flex-wrap justify-left tag-gap">
                    {tags.map((aTag) => (
                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset tag tag_${aTag.color}`} key={aTag.id}>{aTag.name}</span>
                    ))}
                </div>
                </div>
            </article>
        </div>

        
    );
}