import React from 'react'
import BgBlurSvg from '../../../../../assets/BgBlurSvg'
import BgBlurSvgTop from '../../../../../assets/BgBlurSvgTop'
import BgGridSvg from '../../../../../assets/BgGridSvg'

const Hero = () => {
    return (
        <div className="bg-slate-900 relative isolate px-6 pt-14 lg:px-8 h-screen">
            <BgBlurSvgTop />
            <div className="mx-auto max-w-4xl flex flex-col h-full justify-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <p className="relative rounded-full py-1 px-4 text-sm leading-6 text-white ring-1 ring-indigo-600 bg-indigo-600">
                        We are on Beta!
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        Transform Text with Our Powerful Tools
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Our website offers a range of text tools to help you work more efficiently. From text-to-speech to image recognition, we've got you covered.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            className="rounded-md bg-indigo-600 px-9 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get started
                        </button>
                        <button className="text-sm font-semibold leading-6 text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <BgGridSvg />
            <BgBlurSvg />
        </div>
    )
}

export default Hero