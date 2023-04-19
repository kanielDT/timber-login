import { useState } from "react"
import {initializeApp} from "firebase/app"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import  Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
    
const firebaseConfig = {
    apiKey: "AIzaSyCHWJ8ujrKiEdujS9DPF9cDjTJRvTQHZq4",
    authDomain: "timber-login-kdt.firebaseapp.com",
    projectId: "timber-login-kdt",
    storageBucket: "timber-login-kdt.appspot.com",
    messagingSenderId: "832855906949",
    appId: "1:832855906949:web:0dae5fc22fca479c6867ec"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()
       
        const handleLogin = async (e) => {
            e.preventDefault()
            const response = await signInWithEmailAndPassword(auth, email, password)
            .catch(err => console.error(err))
            setUser(response.user)
        }

        if(user) {
            return (
                <h2>Welcome User!</h2>
            )
        }


    return (
        <>
        <Form onSubmit= {handleLogin}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email" 
                placeholder="Enter Email"
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <Form.Text>We'll never share you pass word with anyone else</Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter passwoord"/>
            </Form.Group>

            <Form.Group>
                <Button 
                variant="success"
                size="lg"
                type="submit">Login</Button>
            </Form.Group>
        </Form>
        </>
    )
}