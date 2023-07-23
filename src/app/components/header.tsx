import Link from 'next/link';
import { ibmPlexMono, montserrat } from '../fonts';
import { metadata } from '../layout';

interface HeaderProps {
    documentId: string;
}

export default function Header({ documentId }: HeaderProps) {
    return (
        <header className="flex flex-row justify-between px-4 w-screen h-24">
            {/* spacer for justify between */}
            <div className='p-4'></div>
            {/* path like header bar */}
            <div className="flex items-center justify-center">
                <div className="flex flex-row text-lg">
                    <span className={ibmPlexMono.className}>
                        <Link href="/" className="hover:text-emerald-600">{metadata.title}</Link>
                        &nbsp;
                        <span className="dark:text-sky-200">/</span>
                        &nbsp;
                        <span className="dark:text-sky-200">{documentId}</span>
                    </span>
                </div>  
            </div>
            {/* spacer for justify between */}
            <div className='p-4'></div>
        </header>
    );
}