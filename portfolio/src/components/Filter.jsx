export const Filter = () => {
    const [skills, setSkills] = useState(aboutJson[3])
    let skillsToFilter = []
    let filteredProjects = []

    const skillSelected = (skillname) => {
        // Update skills
        if (!skillsToFilter.includes(skillname)) {
            skillsToFilter.push(skillname)
        } else {
            skillsToFilter.splice(skillsToFilter.indexOf(skillname), 1);
        }

        // Update projects
        projectsData.forEach(function myFunction(project) {
            // Check if skills is in list
            //  If yes, add it to filteredProjects
            //  If skill is not in list, remove project from filteredProjects

            // Check if project has the skill
            const projectSkills = project.skills
            if (projectSkills.includes(skillname)) {
                if (!filteredProjects.includes(project.name)) {
                    filteredProjects.push(project.name)
                }
            }
        })

        console.log(filteredProjects)
        console.log(skillsToFilter)
    }

    return (
        {/* Filter projects via skills */}
        <div className='flex flex-wrap justify-center mb-4'>
            { skills.context2.map((skill) => (
                <button
                className={ ` bg-yellow-500 px-3 py-2 mx-1 rounded my-1` } 
                onClick={ () => skillSelected(skill) }
                >{ skill }</button>
            )) }
        </div>
    )
}

