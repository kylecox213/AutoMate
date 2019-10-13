import axios from "axios";

export default {
  // -------------------------------------- //
  // USER ROUTES
  // -------------------------------------- //

  // GET all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // GET one User with the given id
  getThisUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // ADD a new User to the database
  addNewUser: function (userData) {
    return axios.post("/api/users", userData)
  },
  // UPDATE a User with the given id
  updateThisUser: function (id, UserData) {
    return axios.put("/api/users/" + id, UserData)
  },
  // DELETE (destroy in Sequelize) a User with the given id
  deleteThisUser: function (id) {
    return axios.delete("api/users/" + id);
  },


  // -------------------------------------- //
  // CUSTOMER ROUTES
  // -------------------------------------- //

  // GET all Customers
  getCustomers: function () {
    return axios.get("/api/customers");
  },
  // GET one Customer with the given id
  getThisCustomer: function (id) {
    return axios.get("/api/customers/" + id);
  },
  // ADD a new Customer to the database
  addNewCustomer: function (CustomerData) {
    return axios.post("/api/customers", CustomerData)
  },
  // UPDATE a Customer with the given id
  updateThisCustomer: function (id, CustomerData) {
    return axios.put("/api/customers/" + id, CustomerData)
  },
  // DELETE (destroy in Sequelize) a Customer with the given id
  deleteThisCustomer: function (id) {
    return axios.delete("api/customers/" + id);
  },
  // GET all Transactions for the Customer with the given id
  getCustomerTransactions: function (id) {
    return axios.get("/api/customers/" + id + "/transactions");
  },
  // GET all Vehicles for the Customer with the given id
  getCustomerVehicles: function (id) {
    return axios.get("/api/customers/" + id + "/vehicles");
  },
  // GET all Vehicles for the Customer with the given id
  getCustomerRelatives: function (id) {
    return axios.get("/api/customers/" + id + "/relatives");
  },



  // -------------------------------------- //
  // VEHICLE ROUTES
  // -------------------------------------- //

  // GET all Vehicles
  getVehicles: function () {
    return axios.get("/api/vehicles");
  },
  // GET one Vehicle with the given id
  getThisVehicle: function (id) {
    return axios.get("/api/vehicles/" + id);
  },
  // ADD a new Vehicle to the database
  addNewVehicle: function (VehicleData) {
    return axios.post("/api/vehicles", VehicleData)
  },
  // UPDATE a Vehicle with the given id
  updateThisVehicle: function (id, VehicleData) {
    return axios.put("/api/vehicles/" + id, VehicleData)
  },
  // DELETE (destroy in Sequelize) a Vehicle with the given id
  deleteThisVehicle: function (id) {
    return axios.delete("api/vehicles/" + id);
  },
  // GET all Transactions for the Vehicle with the given id
  getVehicleTransactions: function (id) {
    return axios.get("/api/vehicles/" + id + "/transactions");
  },



  // -------------------------------------- //
  // TRANSACTION ROUTES
  // -------------------------------------- //

  // GET all Transactions
  getTransactions: function () {
    return axios.get("/api/transactions");
  },
  // GET one Transaction with the given id
  getThisTransaction: function (id) {
    return axios.get("/api/transactions/" + id);
  },
  // ADD a new Transaction to the database
  addNewTransaction: function (TransactionData) {
    return axios.post("/api/transactions", TransactionData)
  },
  // UPDATE a Transaction with the given id
  updateThisTransaction: function (id, TransactionData) {
    return axios.put("/api/transactions/" + id, TransactionData)
  },
  // DELETE (destroy in Sequelize) a Transaction with the given id
  deleteThisTransaction: function (id) {
    return axios.delete("api/transactions/" + id);
  },
  // GET all Vehicles for the Transaction with the given id
  getTransactionVehicles: function (id) {
    return axios.get("/api/transactions" + id + "/vehicles");
  },
  // GET all Customers for the Transaction with the given id
  getTransactionCustomers: function (id) {
    return axios.get("/api/transactions" + id + "/customers");
  },



  // -------------------------------------- //
  // REPORT ROUTES
  // -------------------------------------- //

  // GET all Reports
  getReports: function () {
    return axios.get("/api/reports");
  },
  // GET one Report with the given id
  getThisReport: function (id) {
    return axios.get("/api/reports/" + id);
  },
  // ADD a new Report to the database
  addNewReport: function (report) {
    return axios.post("/api/reports", report)
  },
  // DELETE (destroy in Sequelize) a Report with the given id
  deleteThisReport: function (id) {
    return axios.delete("api/reports/" + id);
  }




};
