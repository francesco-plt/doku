import Link from 'next/link';
import { ibmPlexMono } from '../fonts';
import { metadata } from '../layout';

interface PromptProps {
    documentId: string;
}

export default function Prompt({ documentId }: PromptProps) {
    return (
        <div className='px-8 py-2 text-left w-full'>
            <p className='pl-2 font-medium'>
                <span className={ibmPlexMono.className}>
                    <Link href="/" className="hover:text-emerald-600">{metadata.title}</Link>
                    &nbsp;$ ls .. && cat {documentId}
                </span>
            </p>
        </div>
    );
}