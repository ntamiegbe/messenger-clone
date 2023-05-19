import prisma from '../libs/prismadb'

const getUsers =async () => {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return users
    } catch (error: any) {
        return []
    }
}

export default getUsers