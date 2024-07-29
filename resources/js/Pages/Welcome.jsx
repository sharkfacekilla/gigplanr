import ApplicationLogo from '@/Components/ApplicationLogo';
import BriefAbout from '@/Components/VisitorComponents/BriefAbout';
import Footer from '@/Components/VisitorComponents/Footer';
import SplashScreen from '@/Components/VisitorComponents/SplashScreen';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />

            <div className="bg-dark-black text-white bg-img">
            <nav className="bg-dark-black fixed w-full top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" width={200}/>
                                </Link>
                            </div>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end mt-3">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md bg-teal me-2 mt-auto mb-auto px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md bg-teal me-2 mt-auto mb-auto px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md mt-auto mb-auto px-3 py-2 text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>         
                    </div>
                </nav>
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-dark-black selection:text-white pt-12">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <main className="mt-6">
                            <SplashScreen />
                            <BriefAbout />
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
