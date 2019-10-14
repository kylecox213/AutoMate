import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Register extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRegistration = event => {
        event.preventDefault();
        if (!this.state.username || !this.state.password) {
            return;
        }
        API.addNewUser({
            username: this.state.username,
            password: this.state.password
        })
            .then(newUser => { API.userLogin(newUser) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row className="max-width: 900px; margin:auto;">
                    <Col size="md-6">
                        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Register</h1>
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="username-input">Username</label>
                                <Input type="input" id="username-input" name="username" className="form-control" onChange={this.handleInputChange} placeholder="Enter Email" required />
                                <div className="form-group">
                                    <label htmlFor="password-input">Password</label>
                                    <Input type="password" id="password-input" name="password" className="form-control" onChange={this.handleInputChange} placeholder="Enter Password" required />
                                    <FormBtn type="submit" className="btn btn-block" onClick={this.handleRegistration}>Register</FormBtn>
                                    <p className="lead mt-4">
                                        Already have an account? <a href="/">Login</a>.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }




}

export default Register;