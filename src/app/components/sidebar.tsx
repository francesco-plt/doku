import Link from 'next/link';
import { ibmPlexMono } from '../fonts';
import Prompt from '../components/prompt';

async function getFileList(): Promise<string[]> {
    try {
      const response = await fetch('http://localhost:3001/api/docs', { cache: 'no-store' });
      const data = await response.json();
      return data.fileNames as string[];
    } catch (err) {
      console.error(err);
      return [];
    }
}

export default async function Sidebar() {
    const fileNames = await getFileList();
  return (
    <div className="px-8 flex flex-col items-center">
        <div className="px-4"></div>
        <ul>
            {fileNames != undefined && fileNames.map((fileName) => (
                <li key={fileName}>
                    {/* <img src="/file_lines.png" className="inline-block object-scale-down px-2 pb-1 h-6" /> */}
                    <span className={ibmPlexMono.className}>
                    <Link href={`/${fileName}`} className='hover:text-emerald-600'>
                        ./{fileName}
                    </Link>
                    </span>
                </li>
            ))}
        </ul>
    </div>
  );
}

