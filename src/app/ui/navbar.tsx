interface NavBarProps {
    projectName: string;
    currentDoc: string;
    currentSection: string;
}

export default function Navbar({ projectName, currentDoc, currentSection }: NavBarProps) {
    return (
        <header className="flex flex-col items-center justify-center p-4 h-24">
            {/* shell-like path showing projectname and currentdoc */}
            <div className="flex flex-row text-lg">
                <span className="text-gray-400">{projectName}</span>
                &nbsp;
                <span className="text-gray-400">/</span>
                &nbsp;
                <span className="text-gray-400">{currentDoc}</span>
                {currentSection && (
                    <>
                    &nbsp;
                    <span className="text-gray-400">/</span>
                    &nbsp;
                    <span className="text-gray-400">{currentSection}</span>
                    </>
                )}
            </div>  
        </header>
    );
}