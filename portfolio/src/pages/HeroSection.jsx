import background from '../assets/images/hero_bg.jpg';
import { Button } from '../components/Button';
import { MyIcon } from '../components/MyIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/fontawesome-svg-core';


export const HeroSection = () => {
    return (
        <div 
        className="h-screen flex items-center justify-center flex-col"  
        style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            {/* TITLE */}
            <div>
                <h1 className='text-6xl uppercase text-red-600 font-semibold'>Shiba</h1>
            </div>

            {/* BUTTONS */}
            <div className='pt-2'>
                <Button text = 'My CV' />
                <Button text = 'Projects' />
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div className='text-red-800 text-2xl pt-2'>
                <MyIcon 
                link='https://github.com/shiba517' 
                icon={<FontAwesomeIcon icon={faSquareGithub} />}
                />
                <MyIcon 
                link='https://www.linkedin.com/in/shiba-deb-2099b6105/' 
                icon={<FontAwesomeIcon icon={faLinkedin} />}
                />
            </div>
        </div>
    )
}