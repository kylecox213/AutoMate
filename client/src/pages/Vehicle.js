import React from "react";
import { Col, Row, Container } from "../components/Grid";
import {Input, FormBtn, EditBtn } from "../components/Form";

class Vehicle extends React.Component {

  state = {
    addType: "",
    firstName: "",
    lastName: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    plateNumber: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "50px auto" }}>Customer Information</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <form>
              <div className="form-row" style={{ marginTop: "30px" }}>
              <Col size="sm-5">
                  <Input
                    type="input"
                    name="firstName"
                    id="inputFirstName"
                    label="First Name"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-5">
                  <Input
                    type="input"
                    name="lastName"
                    id="inputLastName"
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <FormBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit Information</FormBtn>
                </Col>
                </div>
                <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-5">
                  <Input
                    type="input"
                    name="address"
                    id="inputAddress"
                    label="Street Address"
                    placeholder="Street Address"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-5">
                  <Input
                    type="input"
                    name="unit"
                    id="inputUnit"
                    label="Apt./Unit"
                    placeholder="Apt./Unit"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <FormBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit Information</FormBtn>
                </Col>
              </div>
              <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="city"
                    id="inputCity"
                    label="City"
                    placeholder="City"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="state"
                    id="inputState"
                    label="State"
                    placeholder="State"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="zip"
                    id="inputZip"
                    label="Zip"
                    placeholder="Zip"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="phone"
                    id="inputPhone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <FormBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit Information</FormBtn>
                </Col>
              </div>
              </form>
              <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "50px auto" }}>Vehicles:</h1>
          </Col>
        </Row>
              <form>
              <div className="form-row" style={{ marginTop: "30px" }}>
              <Col size="sm-1" />
              <Col size="sm-2">
                  <Input
                    type="input"
                    name="make"
                    id="inputMake"
                    label="Make"
                    placeholder="Make"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="model"
                    id="inputModel"
                    label="Model"
                    placeholder="Model"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="year"
                    id="inputYear"
                    label="Year"
                    placeholder="Year"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="plateNumber"
                    id="inputPlateNumber"
                    label="Plate Number"
                    placeholder="Plate Number"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
                  <FormBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit</FormBtn>
                </Col>
                <Col size="sm-1">
                  <FormBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Add Vehicle</FormBtn>
                </Col>
                <Col size="sm-1" />
              </div>
            </form>
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    )
  };

}

export default Vehicle;
