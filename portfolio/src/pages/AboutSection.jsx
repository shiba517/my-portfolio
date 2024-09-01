import { useState } from 'react';
import me from '../assets/images/me.jpg';
import aboutJson from '../dataFiles/about.json'
import { MySubHeader } from "../components/MySubHeader";
import { Wave } from '../components/Wave'

export const AboutSection = () => {
    const [aboutTab, setAboutTab] = useState(aboutJson[0])

    const updateAboutTab = (tabName) => {
        setAboutTab(tabName)
    }

    return (
        <div 
        id='AboutSection' 
        className=" min-h-fit  overflow-hidden bg-purple-200 my-circle-bg" 
        style={{
            backgroundImage: "../assets/images/circle-scatter-haikei.svg"
        }}>
            <div className='container md:px-20 mx-auto pb-4'>
                <MySubHeader title='About me' css='text-red-800'/>
                <div className="grid grid-cols-1 md:grid-cols-5 ">
                    <div className='col md:col-span-2 mx-auto md:pb-4'>
                        <img src={ me } alt="me" className='h-[30rem] border-white border-8 rounded hover:rotate-6 transition-transform shadow-xl' />
                    </div>
                    <div className='col md:col-span-3 px-4 pt-4 md:pt-0 '>
                        {/* TABS */}
                        <div className='flex flex-row text-center'>
                            {aboutJson.map((about) => (
                                <div 
                                className={`w-full py-1 mx-1 rounded capitalize cursor-pointer ${about.title === aboutTab.title ? "bg-yellow-500 text-black" : "bg-purple-700 hover:bg-purple-900 hover:text-gray-100"}`}
                                onClick={() => updateAboutTab(about)}>
                                    <p>{ about.title }</p>
                                </div>
                            ))}
                        </div>
                        {/* TAB CONTENT */}
                        <div className='pt-4 px-4 text-left'>
                            <p className='text-purple-900 font-bold text-left text-lg mb-2'>"{ aboutTab.context3 }"</p>
                            <p>{ aboutTab.context }</p>
                            { aboutTab.context2 ? aboutTab.context2.map((skill) => (
                                <p className='text-center'>{ skill }</p>
                            )) : null}
                            { aboutTab.context4 ? aboutTab.context4.map((skill) => (
                                <p className=''>{ skill }</p>
                            )) : null}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className=''>
                <Wave />
            </div>
            
        </div>
    )
}