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

    return (
        <div className='ArticleByURL flex flex-col gap-20 bg-slate-900 relative isolate min-h-screen overflow-y-hidden py-32 '>

            <div className='ArticleByURLHeader flex flex-col gap-10 items-center '>
                <div className='max-w-3xl text-center flex flex-col gap-5'>
                    <h1 className="block text-5xl font-bold text-white">
                        Extract Text From Image
                    </h1>
                    <p className='text-base leading-7 text-slate-400 text-center'>Extract valuable information from images with our image recognition feature. Simply input the image URL, and our tool will extract specific data such as email addresses, phone numbers, length, dates, times, and prices.</p>
                </div>

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