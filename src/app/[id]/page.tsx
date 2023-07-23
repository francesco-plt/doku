import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Prompt from '../components/prompt';
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
        {/* <Header documentId={id}/> */}
        <div className="flex flex-row justify-center py-12">
            {fileContent !== "" && 
            <div className="w-1/4 flex flex-col items-center px-4">
                <Prompt documentId={id}/>
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
                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} children={fileContent} />
                    </span>
                </article>
            </div>
        </div>
        </>
    );
}