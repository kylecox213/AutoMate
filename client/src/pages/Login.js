import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, RedBtn } from "../components/Form";
import API from "../utils/API";

class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    presentError = err =>   {
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLoginAttempt = event => {
        event.preventDefault();
        if (!this.state.username || !this.state.password) {
            return;
        }
        API.userLogin({
            username: this.state.username,
            password: this.state.password
        }).catch(err => {
            console.log(err);
            this.presentError(err);
        });
    };

    render() {
        return (
            <Container fluid>
                <Row className="max-width: 900px; margin:auto;">
                    <Col size="md-6">
                        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Login</h1>
                        <form className="login">
                            <Input
                                type="input"
                                id="username-input"
                                label="Username"
                                name="username"
                                className="form-control"
                                onChange={this.handleInputChange}
                                placeholder="Enter Email"
                                required
                            />
                            <Input
                                type="password"
                                label="Password"
                                id="password-input"
                                name="password"
                                className="form-control"
                                onChange={this.handleInputChange}
                                placeholder="Enter Password"
                                required
                            />
                            <RedBtn
                                type="button"
                                className="btn btn-block"
                                onClick={this.handleLoginAttempt}
                            >Login</RedBtn>
                            <p className="lead mt-4">No Account? <a href="/register">Register</a>.</p>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    };




}

export default Login;