import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/*
This component will be used to render the actual
markdown from the 'docs' folder to the page.
*/

interface ContentProps {
    markdown: string;
}

export default function Content({ markdown }: ContentProps) {  
    return (
        <article className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />
        </article>
    );
}