import React, { useState } from 'react'
import { TextToAudio } from '../../../repository/TextToSpeech'

const TextToSpeech = () => {
    const [text, setText] = useState('')
    const [audio, setAudio] = useState()

    const textToAudio = async (event) => {
        event.preventDefault()
        await TextToAudio(text, setAudio)
    }
    console.log(audio);


    return (
        <div className='bg-slate-900 h-screen flex flex-col justify-center'>
            <form onSubmit={textToAudio}>
                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                        Write a Text that you want to convert audio
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>
                <input type="submit"
                    value={'Convert'}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                />
            </form>

            <div>
                {audio && <audio controls src={audio} />}

            </div>



        </div>
    )
}

export default TextToSpeech