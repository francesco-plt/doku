import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
        <div className="flex flex-row justify-center">
            <div className="w-3/4 flex flex-col items-center p-4">
                {fileContent === "" && <p>This file is empty...</p>}
                <article className="prose prose-md">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} children={fileContent} />
                </article>
            </div>
        </div>
        </>
    );
}