import { Prisma } from "@prisma/client"

type PostWithAuthor = Prisma.PostGetPayload<{
    include: { author: true }
}>

export default async function FeedPage() {
    return (
        <p>ok</p>
    )
}