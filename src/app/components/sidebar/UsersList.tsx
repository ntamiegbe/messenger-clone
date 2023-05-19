'use client'

import { User } from "@prisma/client"
import SingleUser from "./SingleUser"

interface UserListProps {
    items: User[]
}

const UsersList: React.FC<UserListProps> = ({items}) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-lightBlue block w-full left-0">
        <div className="px-5">
            <div className="flex-col">
                <div className="text-2xl font-semibold text-lightGray py-4">Users</div>
            </div>
            {items.map((item) => (
                <SingleUser key={item.id} data={item} />
            ))}
        </div>
    </aside>
  )
}

export default UsersList