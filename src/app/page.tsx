import { metadata } from './layout';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ibmPlexMono } from './fonts';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';

// retrieve file list from localhost:3000/api/docs
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

export default async function Home() {
    const fileNames = await getFileList();
    return (
        <>
        <div>
            <h1 className="text-4xl font-bold">Hello world</h1>
            <p className="text-2xl font-semibold">This is a test page</p>
            {fileNames.length === 0 && <p>no files</p>}
            {fileNames.map((fileName) => {
                return (
                    <>
                    <Link href={`/${fileName}`}>{fileName}</Link>
                    <br />
                    </>
                );
            })}
        </div>
        </>
    );
}