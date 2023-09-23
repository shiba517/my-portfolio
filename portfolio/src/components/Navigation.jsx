import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam, faCode, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'

export const Navigation = () => {
    return (
        <div className="bg-none fixed bottom-0 w-full">
            <div className='my-4 bg-red-600 w-fit mx-auto p-2 rounded-full [&>*]:px-2 '>
                <a href="#HeroSection" rel="noreferrer" className='hover:text-yellow-500'>
                    <FontAwesomeIcon icon={faHouse} />
                </a>
                <a href="#AboutSection" rel="noreferrer" className='hover:text-yellow-500'>
                    <FontAwesomeIcon icon={faFaceSmileBeam} />
                </a>
                <a href="#ProjectsSection" rel="noreferrer" className='hover:text-yellow-500'>
                    <FontAwesomeIcon icon={faCode} />
                </a>
                <a href="#FooterSection" rel="noreferrer" className='hover:text-yellow-500'>
                    <FontAwesomeIcon icon={faMessage} />
                </a>
            </div>
        </div>
    )
}
