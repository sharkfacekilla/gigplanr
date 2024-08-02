export default function BasicCard() {
    return (
        <>
            <div className="space-y-4 bg-blue py-4 px-4 rounded-2xl shadow-xl shadow-dark-blue items-center flex flex-col text-center">
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Active Users</h3>
                    <p className="text-muted-foreground">Current active users on the platform.</p>
                </div>
                <div className="flex items-center justify-center rounded-md bg-muted p-8 text-4xl font-bold">1,234</div>
            </div>
        </>
    )
};
