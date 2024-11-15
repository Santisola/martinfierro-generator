import { Github, Package } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 h-screen rootContainer">
            <header>
                <div className="max-w-7xl mx-auto py-6 px-4">
                    <h1 className="mt-4 text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Martín Fierro Generator
                    </h1>
                </div>
            </header>
            <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-4">
                {props.children}
            </main>
            <footer className='text-gray-900 dark:text-gray-100 text-center py-8 px-4'>
                <p>Developed by <a href="mailto:isolasantiago@gmail.com"><strong>Santiago Isola</strong></a></p>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <a href="https://www.npmjs.com/package/martinfierro-generator" target='_blank' className="flex items-center justify-center gap-1">
                    <Package />
                    NPM Package
                    </a>

                    <a href="https://github.com/Santisola/martinfierro-generator/" target='_blank' className="flex items-center justify-center gap-1">
                    <Github />
                    Github
                    </a>
                </div>
            </footer>
        </div>
    );
}