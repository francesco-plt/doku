import Link from 'next/link';
import { ibmPlexMono } from '../fonts';

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
    <div className="p-8 flex flex-col items-center">
        <div className="p-4"></div>
        <ul>
            {fileNames != undefined && fileNames.map((fileName) => (
                <li key={fileName}>
                    <img src="/file_lines.png" className="inline-block object-scale-down px-2 pb-1 h-6" />
                    <span className={ibmPlexMono.className}>
                    <Link href={`/${fileName}`} className='hover:text-green-600'>
                        {fileName}
                    </Link>
                    </span>
                </li>
            ))}
        </ul>
    </div>
  );
}

