import { PencilIcon, MicrophoneIcon, ClipboardDocumentCheckIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const features = [
    {
        name: 'Text To Speech',
        description: 'Turn any text into speech with our text-to-speech feature. Listen to articles and documents without having to read them.',
        icon: MicrophoneIcon,
        href: '/texttospeech'
    },
    {
        name: 'Extract Text From Image',
        description:
            'Extract valuable information from images with our image recognition feature. Our tool will extract specific datas also the text',
        icon: ClipboardDocumentCheckIcon,
        href: '/imagetotext'
    },
    {
        name: 'Summarize Text',
        description:
            'Our text summarizer feature quickly summarizes lengthy articles or reports, saving you time and effort.',
        icon: PencilIcon,
        href: '/summarize'
    },
    {
        name: 'Paraphraser',
        description:
            'Our paraphrase feature allows you to say the same thing in a new way.',
        icon: FaceSmileIcon,
        href: '/paraphraser'
    },
]

export default function Feature() {
    return (
        <div className="bg-slate-900 py-24 sm:py-32" id='feature'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl lg:text-center">
                    <div className="hidden sm:mb-4 sm:flex sm:justify-center">
                        <p className="relative rounded-full py-1 px-4 text-sm leading-6 text-white ring-1 ring-indigo-600/50">
                            Work faster
                        </p>
                    </div>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Text Tools to Simplify Your Work
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Our text tools simplify your text-related tasks, saving you time and effort. With features like text-to-speech and text summarization, you can work smarter, not harder.
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
