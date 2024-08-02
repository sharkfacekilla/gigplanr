/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MA1tjI3saMQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import BasicCard from '@/Components/DashboardComponents/BasicCard';
import QuickActionCard from '@/Components/DashboardComponents/QuickActionCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-dark-black overflow-hidden shadow-sm sm:rounded-lg pb-6">
                        <h1 className='text-5xl text-white font-extrabold'>Welcome {auth.user.name}!</h1>
                        <main className="container grid grid-cols-1 gap-8 px-4 py-8 mt-12 text-white sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
                            <QuickActionCard />
                            <BasicCard />
                            <BasicCard />
                            <BasicCard />
                            <BasicCard />
                            <BasicCard />
                        </main>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
