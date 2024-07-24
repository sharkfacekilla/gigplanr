import Table from '@/Components/Table/TableV1/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Index({ auth, songs }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Library" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-dark-black overflow-hidden">
                        <div className="p-6 bg-dark-black">
                            <h1 className="text-2xl text-white">Library</h1>
                            <Table songs={songs} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}