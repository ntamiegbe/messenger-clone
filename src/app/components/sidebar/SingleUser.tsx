'use client'

import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

interface SingleUserProps {
  data: User
}

const SingleUser: React.FC<SingleUserProps> = ({ data }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true)


  }, [])
  return (
    <div>SingleUser</div>
  )
}

export default SingleUser