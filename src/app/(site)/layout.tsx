import getUsers from "../actions/getUsers"
import Sidebar from "../components/sidebar/Sidebar"
import UsersList from "../components/sidebar/UsersList"

export default async function Layout({
    children
}: {
    children: React.ReactNode
}) {
    const users = await getUsers()
    return (
        //@ts-expect-error Server Component 
        <Sidebar>
            <div className="h-full">
                <UsersList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}