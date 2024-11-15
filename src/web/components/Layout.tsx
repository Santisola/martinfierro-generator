interface LayoutProps {
    children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header>
                <div className="max-w-7xl mx-auto py-6 px-4">
                    <h1 className="mt-4 text-center text-3xl font-bold text-gray-900">
                        Martín Fierro Generator
                    </h1>
                </div>
            </header>
            <main className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-4">
                {props.children}
            </main>
        </div>
    );
}