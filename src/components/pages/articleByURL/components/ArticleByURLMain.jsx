import { useEffect, useState } from "react";

const ArticleByURLMain = ({ newArticle }) => {
    const [height, setHeight] = useState('auto');
    const [content, setContent] = useState('');
    console.log(newArticle.lengths);


    useEffect(() => {
        setContent(newArticle.text)
        const textarea = document.getElementById('ImgToTextResultTextArea');
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setHeight(`${textarea.scrollHeight}px`);
    }, [content, newArticle.text]);

    return (
        <div className='ArticleByURLMainBody'>
            <div className='Details_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10'>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500"> {newArticle.imgUrl}</p>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>

                            {newArticle.emails &&
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.emails.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}


                            {newArticle.phones &&
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phone Numbers</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.phones.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}

                            {newArticle.date &&
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Dates</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.date.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}

                            {newArticle.time &&
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Times</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.time.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}

                            {newArticle.prices &&
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Price</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.prices.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}

                            {newArticle.lengths &&
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Length</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        {newArticle.lengths.map((item, id) => (<p key={id}>{item}</p>))}
                                    </dd>
                                </div>}

                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Extracted Text</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <textarea
                                        id='ImgToTextResultTextArea'
                                        readOnly
                                        className="w-full bg-gray-50"
                                        value={content}
                                        style={{ height: height }}
                                    />
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArticleByURLMain