import './globals.css'
import Navbar from './ui/navbar'
import Footer from './ui/footer'

const projectName = 'Doku'

export const metadata = {
    title: projectName,
    description: 'nextgen documentation platform',
}

export const navState = {
    currentDoc: 'index.md',
    currentSection: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentDoc = 'index.md'
    return (
        <html lang="en">
            <body className='bg-slate-50'>
                <Navbar
                    projectName={projectName}
                    currentDoc={navState.currentDoc}
                    currentSection={navState.currentSection}
                />
                {children}
                <Footer />
            </body>
        </html>
    )
}
