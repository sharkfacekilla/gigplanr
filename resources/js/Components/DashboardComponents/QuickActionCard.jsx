import { Link } from '@inertiajs/react';

export default function QuickActionCard() {
    return (
        <>
            <div className="space-y-4 bg-blue py-4 px-4 rounded-2xl shadow-xl shadow-dark-blue items-center flex flex-col text-center">
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Quick Actions</h3>
                    <p className="text-muted-foreground">Get started with these actions.</p>
                </div>
                <Link href="#" className="inline-flex h-12 items-center justify-center rounded-md bg-teal px-5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-teal/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-lg shadow-white/30" prefetch={false} >Create New Setlist</Link> <br />
                <Link href="#" className="inline-flex h-12 items-center justify-center rounded-md bg-teal px-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-teal/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-lg shadow-white/30" prefetch={false} >View Library&nbsp;</Link>
            </div>
        </>
    )
};
