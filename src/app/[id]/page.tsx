import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { ibmPlexMono } from '../fonts';

async function getDocumentContent(id: string): Promise<string> {
    try {
        const response = await fetch(`http://localhost:3001/api/docs/${id}`, { cache: 'no-store' });
        const data = await response.json();
        return data.fileContent as string;
    } catch (err) {
        console.error(err);
        return '';
    }
}

export default async function DocumentContent({ params }: { params: { id: string } }) {
    const { id } = params;
    const fileContent: string = await getDocumentContent(id);
    return (
        <>
        <Header documentId={id}/>
        <div className="flex flex-row justify-center">
            {fileContent !== "" && 
            <div className="w-1/4 flex flex-col items-center px-4">
                <Sidebar/>
            </div>}
            <div className="w-3/4 flex flex-col items-center px-4">
                {fileContent === "" && <>
                    <p className={ibmPlexMono.className}>This file is empty...</p>
                    <p className={ibmPlexMono.className}>Probably the backend is down</p>
                </>}
                {/* <article className="prose prose-md prose-p:text-green-400 prose-headings:text-green-200"> */}
                <article className="prose prose-md">
                    <span className={ibmPlexMono.className}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]} children={fileContent} />
                    </span>
                </article>
            </div>
        </div>
        </>
    );
}