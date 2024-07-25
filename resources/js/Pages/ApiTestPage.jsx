import Table from "@/Components/Table/TableV1/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect, useRef, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AlbumCard from "@/Components/AlbumCards/AlbumCard";
import AppleLookinSearchBar from "@/Components/AppleLookinSearchBar";
import SearchCard from "@/Components/SearchCards/SearchCard";
import SpotifySearch from "@/Components/SearchComponents/SpotifySearch";

export default function ApiTestPage({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="API Test Page" />
                <div className="overflow-x-scroll md:overflow-hidden">
                    <SpotifySearch />
                </div>
            </AuthenticatedLayout>
        </>
    );
};
