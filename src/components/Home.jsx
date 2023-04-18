import { Button } from "react-bootstrap"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import { useState } from "react"

export default function Home() {
    const [isMember, setISMember] = useState(false)

    return(
    <>
        {
            (isMember)
            ?<Login/>
            :<Signup/>
            
        }
        <Button onClick={() => setISMember(!isMember)}>Switch Form</Button>
    </>
    )
}