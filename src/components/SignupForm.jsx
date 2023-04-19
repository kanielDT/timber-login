import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export default function SignupForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()

    const handleSignup = async (e) => {
        e.preventDefault()
        const results = await createUserWithEmailAndPassword(auth, email, password)
        .catch(alert)
    setUser(results.user)    
    }
    
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const results = await signInWithPopup(auth, provider)
            .catch(alert)
        setUser(results.user)
    }

    if(user) {
        return <h2>Welcomne USer {user.uid} </h2>
    }

    
    return (
        <>
        <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email" 
                placeholder="Enter Email"
                onChange={e => setEmail(e.target.value)}
                value={email} />
                <Form.Text>We'll never share you pass word with anyone else</Form.Text>
            </Form.Group>

            <Form.Group className= "mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={e => setPassword(e.target.value)}
                type="password"
                value={password} 
                placeholder="Enter Password" />
            </Form.Group>

            <Form.Group>
                <Button 
                variant="success"
                size="lg"
                type="submit">Sign Up</Button>
            </Form.Group>
        </Form>
        <Button
            onClick={signInWithGoogle} variant="dark" size="lg" type="submit">Sign up with Google</Button>
        </>
    )
}