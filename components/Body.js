import { useSession } from "next-auth/react"
import Welcome from './Welcome'
import Topics from './Topics'

function Body () {

    const { data: session } = useSession();

    return (
        <main className="h-screen space-y-10 md:space-y-20 overflow-y-scroll">
            <Welcome />
            <Topics />
        </main>
    )
}

export default Body;