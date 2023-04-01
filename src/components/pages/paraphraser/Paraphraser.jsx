import React, { useEffect, useState } from 'react'
import BgBlurSvg from '../../../assets/BgBlurSvg'
import BgBlurSvgTop from '../../../assets/BgBlurSvgTop'
import { paraphraser } from '../../../repository/Paraphraser'

const ParaphraserText = () => {
    const [text, setText] = useState('')
    const [paraphrasedText, setParaphrasedText] = useState()
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(false)
    }, [paraphrasedText])


    const paraphraserHandler = (e) => {
        e.preventDefault()
        if (text.length <= 300) {
            setisLoading(true)
            paraphraser(text, setParaphrasedText)
        }else{
            alert('text must be shorter than 300 character')
        }

    }
    console.log(paraphrasedText);

    return (
        <div className='ArticleByURL flex flex-col gap-20 bg-slate-900 relative isolate min-h-screen overflow-y-hidden py-32 '>

            <div className='ArticleByURLHeader flex flex-col gap-10 items-center '>
                <div className='max-w-3xl text-center flex flex-col gap-5'>
                    <h1 className="block text-5xl font-bold text-white">
                        Paraphraser
                    </h1>
                    <p className='text-base leading-7 text-slate-400 text-center'>Our paraphrasing feature allows you to say the same thing in a new way. Perfect for avoiding plagiarism or simply refreshing your writing, our tool helps you create unique and original content with ease.</p>
                </div>
                <div className='SummarizeMain flex flex-col px-5 gap-5 max-w-7xl w-full md:flex-row'>

                    <div className='form w-full md:w-1/2'>
                        <form onSubmit={paraphraserHandler} className='w-full max-w-3xl flex flex-col items-center justify-center'>

                            <div className='w-full flex justify-end'>
                                <p className='text-white/50'>{text.length}/300</p>
                            </div>

                            <div className="w-full flex flex-col items-center justify-center gap-5">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    type="text"
                                    className="w-full bg-white rounded-md min-h-[40vh] border-0 bg-transparent p-4 text-slate-900 placeholder:text-gray-400 "
                                    placeholder="Write text that you want the paraphrased..."
                                />



                                {!isLoading ? <input type="submit"
                                    value={'Convert'}
                                    className="rounded-md w-full cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                />
                                    :
                                    <input
                                        value={'Loading...'}
                                        className="rounded-md  w-full cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    />
                                }
                            </div>
                        </form>
                    </div>

                    <div className='w-full md:w-1/2 pt-6'>
                        <textarea
                            defaultValue={paraphrasedText?.rewrite}
                            className="block w-full rounded-md border-0 text-gray-900 min-h-[40vh] p-3 resize-none"
                            placeholder='Result will be here and editible'
                        />
                    </div>

                </div>
            </div>

            <BgBlurSvgTop />
            <BgBlurSvg />
        </div>
    )
}

export default ParaphraserText