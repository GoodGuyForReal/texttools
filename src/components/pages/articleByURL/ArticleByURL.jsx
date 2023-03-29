import React, { useEffect, useState } from 'react'
import BgBlurSvg from '../../../assets/BgBlurSvg'
import BgBlurSvgTop from '../../../assets/BgBlurSvgTop'
import { ImageToTextByURL } from '../../../repository/ImageToTextByURL'
import { extractData } from '../../../useCase/DataFinder'
import ArticleByURLMain from './components/ArticleByURLMain'

const ArticleByURL = () => {
    const [imageURL, setImageURL] = useState('')
    const [newArticle, setnewArticle] = useState()

    const articleURL = async (e) => {
        e.preventDefault()
        const getArticle = await ImageToTextByURL(imageURL)
        const newText = extractData(getArticle.text)
        setnewArticle(newText)
        setImageURL("")
    }

    console.log(newArticle);

    // const mock = {
    //     date: ['Saturday'],
    //     emails: ['stancoop@gmail.com', 'emcasarosa82@gmail.com'],
    //     lengths: [],
    //     phones: ['555-919-4889'],
    //     prices: [],
    //     text: "\r\n\r\nPhotography Studio Grand Opening!\r\nTo stancoop@gmail.com * Juanita Casarosa *\r\nGeorge Casarosa *\r\nCc Bcc\r\nPhotography Studio Grand Opening!\r\nHi Everyone,\r\nI have very exciting news for you! This Saturday will be the grand opening of my new studio, EC Photography! I'd love it if you guys could come. It will be from 10:00 to 4:00. There will be entertainment and lots of food, so come out and enjoy the festivities!\r\nHope to see you there!\r\nElena Casarosa\r\nEC Photography Studio 555-919-4889\r\nemcasarosa82@gmail.com\r\nSans Serif TBI U A\r\nT\r\nSend\r\nA\r\n$ O\r\nG\r\nSaved",
    //     time: ['10:00', '4:00'],
    //     imgUrl: "https://media.gcflearnfree.org/content/55e075127dd48174331f5212_01_17_2014/basics_compose_lg.jpg"
    // }

    return (
        <div className='ArticleByURL flex flex-col gap-20 bg-slate-900 relative isolate min-h-screen overflow-y-hidden py-32 '>

            <div className='ArticleByURLHeader flex flex-col gap-10 items-center'>
                <h1 className="block text-5xl font-bold text-white">
                    Extract Text
                </h1>
                <form onSubmit={articleURL} className='w-full flex justify-center gap-5'>

                    <div className="max-w-xl w-full">
                        <input
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            type="url"
                            className="w-full bg-white rounded-md flex-1 border-0 bg-transparent py-3 pl-3 text-slate-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:scale-110 duration-200"
                            placeholder="Enter a URL"
                        />
                    </div>

                    {/* <input type="submit" value="Get Article" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" /> */}
                </form>
            </div>

            <div className='ArticleByURLMain'>
                {newArticle && <ArticleByURLMain newArticle={newArticle} />}
            </div>

            <BgBlurSvgTop />
            <BgBlurSvg />
        </div>
    )
}

export default ArticleByURL