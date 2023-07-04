import Content from './ui/content';
import { readFileSync } from 'fs';

export default function Home() {
    // read the docs/index.md file
    const filePath = `${process.cwd()}/docs/index.md`;
    const markdown = readFileSync(filePath, 'utf8');
    return (
        <div className="flex flex-col items-center p-4">
            <Content markdown={markdown} />
        </div>
    );
}