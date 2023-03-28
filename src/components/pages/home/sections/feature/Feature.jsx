import { PencilIcon, LinkIcon, MicrophoneIcon, ClipboardDocumentCheckIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const features = [
    {
        name: 'Text To Speech',
        description:
            'akes text & languages code and returns as .mp3 format',
        icon: MicrophoneIcon,
        href: '/texttospeech'
    },
    {
        name: 'Article Extraction from URL',
        description:
            'Extract important data from news sources like title, text, summary, keywords, authors, main image, all images, links, etc.',
        icon: LinkIcon,
        href: '/articlebyurl'
    },
    {
        name: 'Extract Text From Files',
        description:
            'csv, doc, docx, eml, epub, json, html, htm, msg, odt, pdf, pptx, ps, rtf, txt, xls, xlsx, gif, jpg, jpeg, png, tiff, tif, mp3, ogg, wav',
        icon: ClipboardDocumentCheckIcon,
        href: ''
    },
    {
        name: 'Summarize Text',
        description:
            'Summarize a long article, story, etc.',
        icon: PencilIcon,
        href: ''
    },
    {
        name: 'Sentiment Analysis',
        description:
            'Sentiment analysis is the use of natural language processing to systematically identify and extract subjective information.',
        icon: FaceSmileIcon,
        href: ''
    },
]

export default function Feature() {
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to deploy your app
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <Link to={feature.href} key={feature.name} className="relative cursor-pointer pl-16 duration-200 rounded-lg hover:scale-105 hover:bg-slate-700 hover:drop-shadow-xl">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-400">{feature.description}</dd>
                            </Link >
                        ))}
                    </dl>
                </div>
            </div>

        </div>
    )
}
