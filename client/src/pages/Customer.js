import React from "react";
import { Col, Row, Container } from "../components/Grid";

import {Input, FormBtn, EditBtn } from "../components/Form";


class Customer extends React.Component {

  state = {
    addType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    color: "",
    plateNumber: "",
    vin: ""
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
            <h1 style={{ textAlign: "center", margin: "10px auto" }}>Customer Information</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <form>
              <div className="form-row" style={{ marginTop: "30px" }}>

              <Col size="sm-4">

                  <Input
                    type="input"
                    name="firstName"
                    id="inputFirstName"
                    label="First Name"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="middleName"
                    id="inputMiddleName"
                    label="Middle Name"
                    placeholder="Middle Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-4">

                  <Input
                    type="input"
                    name="lastName"
                    id="inputLastName"
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                  />
                </Col>
                </div>
                <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-6">
                  <Input
                    type="input"
                    name="address"
                    id="inputAddress"
                    label="Street Address"
                    placeholder="Street Address"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-6">
                  <Input
                    type="input"
                    name="unit"
                    id="inputUnit"
                    label="Apt./Unit"
                    placeholder="Apt./Unit"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </div>
              <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="city"
                    id="inputCity"
                    label="City"
                    placeholder="City"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="state"
                    id="inputState"
                    label="State"
                    placeholder="State"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
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
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="email"
                    id="inputEmail"
                    label="Email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <EditBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit Information</EditBtn>
                </Col>
              </div>
              </form>
              <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "10px auto" }}>Vehicles:</h1>
          </Col>
        </Row>
              <form>
              <div className="form-row" style={{ marginTop: "30px" }}>
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
                <Col size="sm-1">
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
                    name="color"
                    id="inputColor"
                    label="Color"
                    placeholder="Color"
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
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="vin"
                    id="inputVin"
                    label="VIN"
                    placeholder="VIN"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </div>
              <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-2">
                  <EditBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >View Transactions</EditBtn>
                </Col>
                <Col size="sm-1" />
                <Col size="sm-2">
                  <EditBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Add Transactions Information</EditBtn>
                </Col>
                <Col size="sm-5" />
                <Col size="sm-2">
                  <EditBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                    >Edit Information</EditBtn>
                </Col>
              </div>
            </form>
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    )
  };

}

export default Customer;
