import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Hello, It's Me!
                <br className="hidden lg:inline-block"/>Have a nice day
                </h1>
                <p className="mb-8 leading-relaxed">I craft digital experiences that blend elegance and functionality, weaving code into seamless user stories.</p>
                <div className="flex justify-center">
                    <Link href="/projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Going to Projects
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Animation/>
            </div>
      </>
        
    );
}