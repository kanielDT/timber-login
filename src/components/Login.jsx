import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm.jsx";

export default function Login() {
 
    return (
        <Container>
           <Row>
            <Col className="mx-4 p-4 rounded-3 login-container">
                <h1>Login</h1>
                <LoginForm/>
            </Col>
           </Row>
        </Container>

    )
}