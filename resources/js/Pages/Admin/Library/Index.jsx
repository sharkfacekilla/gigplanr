import NewSongModal from '@/Components/Modals/NewSongModal';
import PrimaryButton from '@/Components/PrimaryButton';
import Table from '@/Components/Table/TableV1/Table';
import TableTest from '@/Components/TableTest/TableTest';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ auth, songs }) {
    console.log(songs);
    const [newSongModal, setNewSongModal] = useState(false);

    const openModal = () => {
        setNewSongModal(true);
    }

    const closeModal = () => {
        setNewSongModal(false);
    }

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Library" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-dark-black overflow-hidden shadow-sm sm:rounded-lg pb-6 px-6">
                    <h1 className='text-5xl text-white font-extrabold'>Library</h1>
                    <span className="text-white text-lg text-bold mb-2 mt-12">Your saved songs.</span><br />
                    <span className="text-white text-lg text-bold mb-12">Search Spotify To Add New Songs</span><br />
                    <PrimaryButton className="mt-2">Search Spotify</PrimaryButton>
                                {/* <Table songs={songs} /> */}
                            </div>
                        </div>
                    </div>
                    <TableTest songs={songs}/>
                    <div className="flex w-full items-center justify-center">
                    <button className="text-white bg-dark-black mb-12 mt-12 py-2 px-4 rounded-3xl hover:bg-light-blue" onClick={openModal}>Add Custom Song</button>
                    </div>
                <NewSongModal show={newSongModal} onClose={closeModal} />     
            </AuthenticatedLayout>
        </>
    );
};
