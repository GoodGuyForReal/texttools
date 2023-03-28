import React, { useState } from 'react'
import { ArticleURLToText } from '../../../repository/ArticleURLToText'

const ArticleByURL = () => {
    const [article, setArticle] = useState('')

    const articleURL = (event) => {
        event.preventDefault()
        ArticleURLToText(article)
    }


    return (
        <div className='bg-slate-900 h-screen flex flex-col justify-center'>
            <form onSubmit={articleURL}>

                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter a Artical URL</span>
                            <input
                            onChange={(e) => setArticle(e.target.value)}
                                type="url"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="..."
                            />
                        </div>
                    </div>
                </div>

                <input type="submit" value="Get Article"  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"/>
            </form>

        </div>
    )
}

export default ArticleByURL