import DangerButton from "@/Components/DangerButton";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import TableHeading from "@/Components/TableHeading";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect } from "react";

export default function Table({}) {
    return (
        <>
            <div className="overflow-x-scroll md:overflow-hidden">
                <table className="min-w-full text-sm text-left rtl:text-right text-black dark:text-white">
                    <thead className="text-xs text-white bg-dark-black dark:text-white border-b-2 border-white">
                        <tr className="text-nowrap">
                            <TableHeading name="name">#</TableHeading>
                            <TableHeading name="name">Album Cover</TableHeading>
                            <TableHeading name="start_date">Song Name</TableHeading>
                            <TableHeading name="start_date">Album Title</TableHeading>
                            <TableHeading name="start_date">Time</TableHeading>
                            <TableHeading name="start_date">BPM</TableHeading>
                            <TableHeading name="start_date">Key</TableHeading>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <thead className="text-xs text-white uppercase bg-dark-black dark:bg-dark-black dark:text-white border-b-2 border-light-blue">
                        <tr className="text-nowrap">
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {events.data.map(() => (
                            <tr className="text-black dark:text-white dark:border-white even:bg-blue/20 odd:bg-black">
                                <td className="px-3 py-3.5"></td>
                                <td className="px-3py-3.5">{}</td>
                                <td className="px-3py-2">{}</td>
                                <td className="px-3py-2">{}</td>
                                <td className="px-3py-2">{}</td>
                                <td className="text-nowrap">

                                    <button className="bg-blue text-white p-1 mr-2 rounded-md ">Manage</button>
                                    <Link className="text-blue" href={route()}>Edit Event </Link>
                                    <button className="text-red ps-2"> Delete Event</button>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
            {/* <Pagination links={events.meta.links} /> */}
        </>
    )
};
