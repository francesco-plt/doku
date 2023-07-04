import './globals.css'
import Navbar from './ui/navbar'
import Footer from './ui/footer'

const projectName = 'd0ku'

export const metadata = {
    title: projectName,
    description: 'weird documentation platform',
}

export const navState = {
    projectName: projectName,
    currentDoc: 'index.md',
    currentSection: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='bg-slate-50'>
                <Navbar
                    projectName={navState.projectName}
                    currentDoc={navState.currentDoc}
                    currentSection={navState.currentSection}
                />
                {children}
                <Footer />
            </body>
        </html>
    )
}
