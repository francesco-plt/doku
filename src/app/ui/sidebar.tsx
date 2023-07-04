import { ibmPlexMono } from '../fonts';
import { readdirSync } from 'fs';
import { join } from 'path';

const basePath = process.cwd();
const docsPath = join(basePath, 'docs');

export default function Sidebar() {
  const files = readdirSync(docsPath)
    .filter((file) => file.endsWith('.md'))

  return (
    <div className="p-8 flex flex-col items-center">
        <div className="p-4"></div>
        <ul>
            {files.map((file) => (
                <li key={file}>
                    <img src="/file_lines.png" className="inline-block object-scale-down px-2 pb-1 h-6" />
                    <span className={ibmPlexMono.className}>
                        <a href={`/docs/${file}`}>{file}</a>
                    </span>
                </li>
            ))}
        </ul>
    </div>
  );
}

