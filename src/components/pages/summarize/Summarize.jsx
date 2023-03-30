import React, { useState } from 'react'
import BgBlurSvg from '../../../assets/BgBlurSvg'
import BgBlurSvgTop from '../../../assets/BgBlurSvgTop'
import { Summarizer } from '../../../repository/Summarizer'

const Summarize = () => {
    const [text, setText] = useState('')
    const [newText, setNewText] = useState('')

    const sendNewSummarizer = async (event) => {
        event.preventDefault()
        const getNewSummarizedText = await Summarizer(text)
        setNewText(getNewSummarizedText.summary)
    }

    console.log(newText);

    return (
        <div className='Summarize relative isolate min-h-screen overflow-y-hidden bg-slate-900 flex flex-col items-center py-32 gap-10 '>
            <div className='SummarizeHeader flex flex-col gap-10 items-center max-w-3xl w-full'>
                <div className='w-full text-center flex flex-col gap-5'>
                    <h1 className="block text-5xl font-bold text-white">
                        Text Summarize
                    </h1>
                    <p className='text-base leading-7 text-slate-400 text-center'>Our text summarizer feature quickly summarizes lengthy articles or reports, saving you time and effort.</p>
                </div>
            </div>

            <div className='SummarizeMain flex flex-col px-5 gap-5 max-w-7xl w-full md:flex-row'>
                <div className='form w-full md:w-1/2'>
                    <form onSubmit={sendNewSummarizer} className=' w-full'>
                        <div className="flex flex-col gap-5 w-full">
                            <textarea
                                className="block w-full rounded-md border-0 text-gray-900 h-[90vh] p-3 resize-none"
                                placeholder='Write smth'
                                onChange={(e) => setText(e.target.value)}
                            />
                            <input type="submit"
                                value={'Convert'}
                                className="rounded-md cursor-pointer bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            />
                        </div>
                    </form>
                </div>

                <div className='w-full md:w-1/2'>
                    <textarea
                        readOnly
                        defaultValue={newText}
                        className="block w-full rounded-md border-0 text-gray-900 h-[90vh] p-3 resize-none"
                        placeholder='Result will be here and editible'
                    />
                </div>

            </div>


            <BgBlurSvgTop />
            <BgBlurSvg />
        </div>
    )
}

export default Summarize