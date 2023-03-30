import React, { useState } from 'react'
import BgBlurSvg from '../../../assets/BgBlurSvg'
import BgBlurSvgTop from '../../../assets/BgBlurSvgTop'
import { TextToAudio } from '../../../repository/TextToSpeech'

const TextToSpeech = () => {
    const [text, setText] = useState('')
    const [audio, setAudio] = useState()

    const textToAudioHandler = async (event) => {
        event.preventDefault()
        await TextToAudio(text, setAudio)
    }
    console.log(audio);

    return (
        <div className='TextToSpeech relative isolate min-h-screen overflow-y-hidden bg-slate-900 flex flex-col items-center py-32 gap-10 '>
            <div className='ArticleByURLHeader flex flex-col gap-10 items-center max-w-3xl w-full'>
                <h1 className="block text-5xl font-bold text-white">
                    Text to Audio
                </h1>

                <form onSubmit={textToAudioHandler} className=' w-full'>
                    <div className="flex flex-col gap-5 w-full">
                        <textarea
                            value={text}
                            className="block w-full rounded-md border-0 text-gray-900 h-[20vh] p-3 resize-none"
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


            <div>
                {audio && <audio controls src={audio} />}

            </div>


            <BgBlurSvgTop />
            <BgBlurSvg />
        </div>
    )
}

export default TextToSpeech