import axios from "axios";

export default {
  // Gets all Templates
  getTemplates: function () {
    return axios.get("/api/Templates");
  },
  // Gets the Template with the given id
  getTemplate: function (id) {
    return axios.get("/api/Templates/" + id);
  },
  // Deletes the Template with the given id
  deleteTemplate: function (id) {
    return axios.delete("/api/Templates/" + id);
  },
  // Saves a Template to the database
  saveTemplate: function (TemplateData) {
    return axios.post("/api/Templates", TemplateData);
  },

  // -------------------------------------- //
  // Above this are template routes for inspiration
  // Below are routes needed for the application
  // -------------------------------------- //



  // -------------------------------------- //
  // USER ROUTES
  // -------------------------------------- //


  // -------------------------------------- //
  // CUSTOMER ROUTES
  // -------------------------------------- //

  // GET all Customers
  getCustomers: function () {
    return axios.get("/api/customers");
  },
  // GET one Customer with the given id
  getThisCustomer: function (id) {
    return axios.get("/api/customers" + id);
  },
  // ADD a new Customer to the database
  addNewCustomer: function (CustomerData) {
    return axios.post("/api/customers", CustomerData)
  },
  // DELETE (destroy in Sequelize) a Customer with the given id
  // -------------------------------------- //
  // DO WE NEED THIS ROUTE?
  // -------------------------------------- //
  deleteThisCustomer: function (id) {
    return axios.delete("api/customers/" + id);
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
  // DELETE (destroy in Sequelize) a Vehicle with the given id
  // -------------------------------------- //
  // DO WE NEED THIS ROUTE?
  // -------------------------------------- //
  deleteThisVehicle: function (id) {
    return axios.delete("api/vehicles/" + id);
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
  // DELETE (destroy in Sequelize) a Transaction with the given id
  // -------------------------------------- //
  // DO WE NEED THIS ROUTE?
  // -------------------------------------- //
  deleteThisTransaction: function (id) {
    return axios.delete("api/transactions/" + id);
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
  // ADD a new Transaction to the database
  addNewReport: function (report) {
    return axios.post("/api/reports", report)
  },
  // DELETE (destroy in Sequelize) a Transaction with the given id
  // -------------------------------------- //
  // DO WE NEED THIS ROUTE?
  // -------------------------------------- //
  deleteThisReport: function (id) {
    return axios.delete("api/reports/" + id);
  }




};
