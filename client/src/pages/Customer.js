import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, OjBtn, BlueBtn } from "../components/Form";



class Customer extends React.Component {

  state = {
    edit: "",
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

  toggleVehicleEdit = (event) => {
    event.preventDefault();
    this.setState({
      editVehicle: !this.state.editVehicle
    });
  }

  toggleCustomerEdit = (event) => {
    event.preventDefault();
    this.setState({
      editCustomer: !this.state.editCustomer
    });
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", margin: "10px auto 30px" }}>Customer Information</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-1" />
          <Col size="md-10" style={{ marginBottom: "50px" }}>
            <form>
              <div className="form-row">
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="firstName"
                    id="inputFirstName"
                    label="First Name"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="middleName"
                    id="inputMiddleName"
                    label="Middle Name"
                    placeholder="Middle Name"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="lastName"
                    id="inputLastName"
                    label="Last Name"
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-6">
                  <Input
                    type="input"
                    name="address"
                    id="inputAddress"
                    label="Street Address"
                    placeholder="Street Address"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="unit"
                    id="inputUnit"
                    label="Apt./Unit"
                    placeholder="Apt./Unit"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
                <Col size="sm-3">
                  <OjBtn
                    style={{ textAlign: "center", margin: "auto" }}
                    type="submit"
                    onClick={this.toggleCustomerEdit}
                    children={this.state.editCustomer ? "Save Customer" : "Edit Customer"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="city"
                    id="inputCity"
                    label="City"
                    placeholder="City"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
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
                    disabled={!(this.state.editCustomer)}
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
                    disabled={!(this.state.editCustomer)}
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
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
                <Col size="sm-3">
                  <Input
                    type="input"
                    name="email"
                    id="inputEmail"
                    label="Email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editCustomer)}
                  />
                </Col>
              </div>
            </form>
            <Row>
              <Col size="6">
                <BlueBtn
                  style={{ textAlign: "center", margin: "auto" }}
                  type="submit"
                  className="btn btn-block"
                  onClick={this.handleInputChange}
                >Add Transaction</BlueBtn>
              </Col>
              <Col size="6">
                <BlueBtn
                  style={{ textAlign: "center", margin: "auto" }}
                  type="submit"
                  className="btn btn-block"
                  onClick={this.handleInputChange}
                >View Transactions</BlueBtn>
              </Col>
            </Row>
            <h3 style={{ marginTop: 50 }}>Vehicle(s):</h3>
            <form>
              <div className="form-row">
                <Col size="sm-2">
                  <Input
                    type="input"
                    name="make"
                    id="inputMake"
                    label="Make"
                    placeholder="Make"
                    onChange={this.handleInputChange}
                    disabled={!(this.state.editVehicle)}
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
                    disabled={!(this.state.editVehicle)}
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
                    disabled={!(this.state.editVehicle)}
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
                    disabled={!(this.state.editVehicle)}
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
                    disabled={!(this.state.editVehicle)}
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
                    disabled={!(this.state.editVehicle)}
                  />
                </Col>
                <Col size="sm-2">
                  <OjBtn
                    type="submit"
                    className="btn btn-block"
                    onClick={this.toggleVehicleEdit}
                    children={this.state.editVehicle ? "Save" : "Edit"}
                  />
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
