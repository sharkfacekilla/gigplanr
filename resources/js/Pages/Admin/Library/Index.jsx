import Table from '@/Components/Table/TableV1/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


export default function Index({ auth, songs }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Library" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-2xl text-white">Library</h1>
                            <p>Create your own</p>
                            <p>Search Spotify</p>
                            <Table songs={songs} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
