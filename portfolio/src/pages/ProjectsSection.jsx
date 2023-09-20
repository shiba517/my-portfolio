import { Button } from "../components/Button";
import { MySubHeader } from "../components/MySubHeader";
import projectsData from "../dataFiles/projects.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export const ProjectsSection = () => {
    return (
        <div 
        className="min-h-screen pb-8 my-custom-bg bg-purple-900">
            <div className='container mx-auto'>
                <MySubHeader title='Projects' />
                {/* Projects */}
                <div className="flex items-center justify-center flex-col px-4">
                    { projectsData.map((project) => (
                        <div className="w-full bg-red-400 p-4 rounded mb-2">
                            {/* Project image */}
                            <div>
                                <img src={project.image} alt={ project.name }></img>
                            </div>
                            <div>
                                {/* Project content */}
                                <div className="pb-2 pt-3">
                                    <p className="font-semibold text-xl">{ project.name }</p>
                                </div>
                                <div className=" pb-2 text-left">
                                    <p>{ project.description }</p>
                                </div>
                                {/* Project external links */}
                                <div className="text-right pt-2">
                                    <Button text={<FontAwesomeIcon icon={faSquareGithub} />} href={ project.github } />
                                    <Button text='visit' href={ project.url } />
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>

            
        </div>
    )
}