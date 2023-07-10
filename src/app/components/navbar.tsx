import { ibmPlexMono, montserrat } from '../fonts';

interface NavBarProps {
    projectName: string;
    currentDoc: string;
}

export default function Navbar({ projectName, currentDoc }: NavBarProps) {
    return (
        <header className="flex flex-row justify-between p-4 w-screen h-32">
            {/* doku logo, removed for now */}
            <div className="flex items-center justify-center text-xl p-4">
                {/* <span className={montserrat.className}>
                    <span className="text-gray-500 hover:text-gray-800">do</span>
                    &nbsp;
                    <span className="text-gray-500">/</span>
                    &nbsp;
                    <span className="text-gray-400 hover:text-gray-600">ku</span>
                </span> */}
            </div>
            {/* path like header bar */}
            <div className="flex items-center justify-center p-4">
                <div className="flex flex-row text-lg">
                    <span className={ibmPlexMono.className}>
                        <span className="text-gray-400 hover:text-gray-600">{projectName}</span>
                        &nbsp;
                        <span className="text-gray-400">/</span>
                        &nbsp;
                        <span className="text-gray-400 hover:text-gray-600">{currentDoc}</span>
                        {/* {currentSection && (
                            <>
                            &nbsp;
                            <span className="text-gray-400">/</span>
                            &nbsp;
                            <span className="text-gray-400 hover:text-gray-600">{currentSection}</span>
                            </>
                        )} */}
                    </span>
                </div>  
            </div>
            {/* spacer for justify between */}
            <div className='p-4'></div>
        </header>
    );
}