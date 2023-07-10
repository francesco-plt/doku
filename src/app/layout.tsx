import './globals.css'

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
            <body className='flex flex-col h-full bg-sky-50 dark:bg-sky-900 text-sky-850 dark:text-sky-50'>
                {children}
            </body>
        </html>
    )
}
