import NewSongModal from '@/Components/Modals/NewSongModal';
import Table from '@/Components/Table/TableV1/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';


export default function Index({ auth, songs }) {
    const [newSongModal, setNewSongModal] = useState(false);

    const openModal = () => {
        setNewSongModal(true);
    }

    const closeModal = () => {
        setNewSongModal(false);
    }



    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Library" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="p-6">
                            <h1 className="text-2xl text-white">Library</h1>
                            <button className="text-white bg-teal py-2 px-4 rounded-3xl hover:bg-light-blue" onClick={(e) => openModal()}>Add Song</button>
                            <p>Search Spotify</p>
                            <Table songs={songs} />
                        </div>
                    </div>
                </div>
            </div>
            <NewSongModal show={newSongModal} onClose={closeModal}/>
        </AuthenticatedLayout>
    );
};
