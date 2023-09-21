import { Button } from "../components/Button";
import { MySubHeader } from "../components/MySubHeader";
import projectsData from "../dataFiles/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export const ProjectsSection = () => {
    return (
        <div className="min-h-screen pb-8 my-custom-bg bg-purple-900 px-4">
            <div className='container mx-auto'>
                <MySubHeader title='Projects' />
                {/* Projects */}
                {/* <div className="flex items-center justify-center flex-col px-4 bg-green-800"> */}
                <div className="grid grid-cols-3 gap-4">
                { projectsData.map((project) => (
                    <div className="col-span-3 bg-red-400 p-4 rounded mb-2 md:col-span-1 flex flex-col">
                        {/* Project image */}
                        <div>
                            <img src={project.image} alt={ project.name }></img>
                        </div>
                        {/* Project content */}
                        <div className="flex-1 pb-2 pt-3">
                            <p className="font-semibold text-xl mb-1">{ project.name }</p>
                            <p className=" text-left">{ project.description }</p>
                        </div>
                        {/* Project external links */}
                        <div className="text-right pt-2">
                            <Button text={<FontAwesomeIcon icon={faSquareGithub} />} href={ project.github } />
                            <Button text='visit' href={ project.url } />
                        </div>
                    </div>
                    )) }
                </div>
            </div>

            
        </div>
    )
}