import Link from 'next/link';
import { ibmPlexMono } from '../fonts';
import { metadata } from '../layout';

interface PromptProps {
    documentId: string;
}

export default function Prompt({ documentId }: PromptProps) {
    return (
        <div className='text-left px-2 pb-2 w-full'>
            <p className=' font-medium'>
                <span className={ibmPlexMono.className}>
                    <Link href="/" className="hover:text-emerald-600">{metadata.title}</Link>
                    &nbsp;$ ls .. && cat {documentId}
                </span>
            </p>
        </div>
    );
}