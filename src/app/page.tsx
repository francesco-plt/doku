import { ibmPlexMono } from './fonts';
import Content from './ui/content';
import Sidebar from './ui/sidebar';
import { readFileSync } from 'fs';

export default function Home() {
    // read the docs/index.md file
    const filePath = `${process.cwd()}/docs/index.md`;
    const markdown = readFileSync(filePath, 'utf8');
    return (
        <div className="flex flex-row justify-center p-4 w-screen">
            <div className="w-1/4 flex flex-col items-center p-4">
                <Sidebar/>
            </div>
            <div className="w-3/4 flex flex-col items-center p-4">
                <span className={ibmPlexMono.className}>
                    <Content markdown={markdown} />
                </span>
            </div>
        </div>
    );
}