import { useParams } from 'next/navigation'
import { useMemo } from 'react'

const useConversation = () => {
    const params = useParams()

    // Get the conversation ID from the URL parameters.
    const conversationId = useMemo(() => {
        if (!params?.conversationId) {
            return ''
        }

        return params.conversationId as string
    }, [params?.conversationId])

    // Determine whether the conversation is open or closed.
    const isOpen = useMemo(() => !!conversationId, [conversationId])

    // Return an object with the `isOpen` and `conversationId` properties.
    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId])
}

export default useConversation