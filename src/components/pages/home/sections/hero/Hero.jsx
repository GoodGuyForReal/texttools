import React from 'react'
import BgBlurSvg from './assets/BgBlurSvg'
import BgBlurSvgTop from './assets/BgBlurSvgTop'
import BgGridSvg from './assets/BgGridSvg'

const Hero = () => {
    return (
        <div className="bg-slate-900 relative isolate px-6 pt-14 lg:px-8 h-screen">
            <BgBlurSvgTop />
            <div className="mx-auto max-w-2xl flex flex-col h-full justify-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full py-1 px-4 text-sm leading-6 text-slate-300 ring-1 ring-white/50 hover:ring-white/70 duration-200">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <BgGridSvg />
            <BgBlurSvg />
        </div>
    )
}

export default Hero