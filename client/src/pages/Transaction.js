import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, OjBtn, BlueBtn } from "../components/Form";

class Transaction extends React.Component {

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
    vin: "",
    date: "",
    parts: "",
    labor: "",
    total: "",
    tax: "",
    grandTotal: ""
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
            <h1 style={{ textAlign: "center", margin: "10px auto" }}>Transaction Information</h1>
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
                  <OjBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                  >Edit Customer</OjBtn>
                </Col>
              </div>
            </form>
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
                <Col size="sm-1">
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
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="vin"
                    id="inputVin"
                    label="VIN"
                    placeholder="VIN"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <OjBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                  >Edit Vehicle</OjBtn>
                </Col>
              </div>
            </form>
            <form>
              <div className="form-row" style={{ marginTop: "30px" }}>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="date"
                    id="inputDate"
                    label="Date"
                    placeholder="Date"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-4">
                  <Input
                    type="input"
                    name="parts"
                    id="inputParts"
                    label="Parts"
                    placeholder="Parts"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="labor"
                    id="inputLabor"
                    label="Labor"
                    placeholder="Labor"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="total"
                    id="inputTotal"
                    label="Total"
                    placeholder="Total"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-1">
                  <Input
                    type="input"
                    name="tax"
                    id="inputTax"
                    label="Tax"
                    placeholder="Tax"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="grandTotal"
                    id="grandTotal"
                    label="Grand Total"
                    placeholder="Grand Total"
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col size="sm-2">
                  <OjBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.handleInputChange}
                  >Edit Transaction</OjBtn>
                </Col>
              </div>
            </form>
            <div className="form-row" style={{ marginBottom: "15px" }}>
              <Col size="sm-10" />
              <Col size="sm-2">
                <BlueBtn
                  type="submit"
                  className="btn btn-block"
                  onClick={this.handleInputChange}
                >Print Invoice</BlueBtn>
              </Col>
            </div>

          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    )
  };

}

export default Transaction;
