import React from 'react'
import BgBlurSvgTop from '../../../assets/BgBlurSvgTop'
import BgGridSvg from '../../../assets/BgGridSvg'
import Github from '../../../assets/socialicons/Github'
import Linkedin from '../../../assets/socialicons/Linkedin'

const About = () => {

    const githubLink = 'https://github.com/GoodGuyForReal'
    const LinkedinLink = 'https://www.linkedin.com/in/tarik-doganay/'

    return (
        <div className="bg-slate-900 relative isolate px-6 pt-14 lg:px-8 h-screen">
            <BgBlurSvgTop />

            <div className="mx-auto max-w-4xl flex flex-col h-full justify-center">

                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Text Tools Made Easy
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        I'm Tarik, and I created this website to help people work with text more easily and efficiently. I'm a passionate developer who poured my heart and soul into building powerful and user-friendly text tools that make your life easier.
                    </p>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                    My website offers tons of amazing text tools, like text-to-speech, text summarization, image recognition, and paraphrasing. You can listen to text, get quick summaries of long articles, find valuable info in images, and switch up your wording in a snap. My tools are speedy, precise, and a total breeze to use – they're the perfect solution for any text-related task.
                    </p>
                </div>
                <div className='Social w-full justify-center py-10 flex gap-5'>
                    <a href={githubLink} target="_blank" >
                        <Github />
                    </a>
                    <a href={LinkedinLink} target="_blank">
                        <Linkedin />
                    </a>
                </div>
            </div>
            <BgGridSvg />
            <BgBlurSvgTop />
        </div>
    )
}

export default About