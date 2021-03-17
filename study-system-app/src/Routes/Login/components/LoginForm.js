import React, { useState } from "react";
import {Form, Button, Card} from "react-bootstrap";
import "./LoginForm.scss";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return (
        <React.Fragment>
            <div className="LoginBox">
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <Card style={{width: '25rem', height: '25rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title className="card-title">Sign in</Card.Title>
                            <Form>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button block size="lg" type="submit" disabled={!validateForm()}>
                                    Login
                                </Button>
                            </Form>

                            <hr></hr>

                            <Card.Text><a href="#">Forgot your password?</a> </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginForm;

