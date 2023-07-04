import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/*
This component will be used to render the content of the page.
It will be used in the page component.
The content is passed as a prop to the component and it is
rendered using remark.
*/

interface ContentProps {
    markdown: string;
}

export default function Content({ markdown }: ContentProps) {  
    return (
        <article className="prose lg:prose-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} />
        </article>
    );
}