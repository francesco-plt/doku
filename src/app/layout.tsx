import './globals.css'

export const metadata = {
    title: 'd0ku',
    description: 'weird looking documentation platform',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='min-h-screen bg-zinc-900 text-emerald-400'>
                {children}
            </body>
        </html>
    )
}
