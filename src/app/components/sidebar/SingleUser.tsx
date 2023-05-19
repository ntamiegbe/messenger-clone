'use client'

import { User } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import Avatar from "./Avatar"

interface SingleUserProps {
  data: User
}

const SingleUser: React.FC<SingleUserProps> = ({ data }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)

    axios.post('/api/conversations', {
      userId: data.id
    })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`)
      })
      .finally(() => setIsLoading(false))

  }, [data, router])
  return (
    <div onClick={handleClick} className="w-full relative flex items-center space-x-3 bg-lightBlue my-3 p-3 hover:bg-lightBlue rounded-lg transition cursor-pointer">
      <Avatar />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-lightGray">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleUser