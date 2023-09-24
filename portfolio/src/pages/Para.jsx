import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import background from '../assets/images/hero_bg_3.jpg';
import background2 from '../assets/images/hero_bg_2.jpg';


export const Para = () => {
    return (
        <div className=' bg-black'>
            <Parallax 
            pages={3} 
            >
                <ParallaxLayer 
                offset={0}
                factor={1}
                // speed={0.5}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    height: '150vh'
                }}
                className='bg-blue-300'
                >
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}
                </ParallaxLayer>

                <ParallaxLayer 
                offset={1} 
                factor={2}
                speed={2}
                className='bg-green-500 h-screen'
                >
                    <p>Facere fugit nisi, laborum assumenda magnam nemo expedita ab ducimus.</p>
                </ParallaxLayer>

                <ParallaxLayer 
                offset={2} 
                factor={1}
                speed={0.5}
                className='bg-pink-500 h-screen'
                >
                    <p>Facere fugit nisi, laborum assumenda magnam nemo expedita ab ducimus.</p>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}