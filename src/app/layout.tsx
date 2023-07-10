import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
    title: 'd0ku',
    description: 'weird documentation platform',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='bg-slate-50 h-screen'>
                {children}
            </body>
        </html>
    )
}
