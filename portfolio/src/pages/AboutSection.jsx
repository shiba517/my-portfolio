import { useState } from 'react';
import me from '../assets/images/me.jpg';
import aboutJson from '../dataFiles/about.json'

export const AboutSection = () => {
    const [aboutTab, setAboutTab] = useState(aboutJson[0])

    const updateAboutTab = (tabName) => {
        setAboutTab(tabName)
    }

    return (
        <div className="min-h-screen bg-purple-900 pb-8">
            <div className='container mx-auto'>
                <div className='pt-[10vh] pb-8'>
                    <h2 className='text-3xl text-yellow-500 font-bold uppercase'>About me</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className='col md:col-span-2 mx-auto'>
                        <img src={ me } alt="me" className='h-[30rem] border-white border-8 rounded' />
                    </div>
                    <div className='col md:col-span-3 px-4 pt-4 md:pt-0 text-gray-200'>
                        {/* TABS */}
                        <div className='flex flex-row text-center'>
                            {aboutJson.map((about) => (
                                <div 
                                className={`w-full py-1 mx-1 rounded ${about.title === aboutTab.title ? "bg-yellow-500 text-black" : "bg-purple-800"}`}
                                onClick={() => updateAboutTab(about)}>
                                    <p>{ about.title }</p>
                                </div>
                            ))}
                        </div>
                        {/* TAB CONTENT */}
                        <div className='pt-4 px-4'>
                            <p>{ aboutTab.context }</p>
                            { aboutTab.context2 ? aboutTab.context2.map((skill) => (
                                <p>{ skill }</p>
                            )) : ""}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}