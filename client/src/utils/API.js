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
    return axios.get("/api/Customers");
  },
  // GET one Customer with the given id
  getThisCustomer: function (id) {
    return axios.get("/api/Customers" + id);
  },
  // ADD a new Customer to the database
  createNewCustomer: function (CustomerData) {
    return axios.post("/api/Customers", CustomerData)
  },
  // DELETE (destroy in Sequelize) a Customer with the given id
  // -------------------------------------- //
  // DO WE NEED THIS ROUTE?
  // -------------------------------------- //
  deleteThisCustomer: function (id) {
    return axios.delete("api/Customers" + id);
  },



  // -------------------------------------- //
  // VEHICLE ROUTES
  // -------------------------------------- //

  // GET all Vehicles
  getVehicles: function () {
    return axios.get("/api/Vehicles");
  },



  // -------------------------------------- //
  // TRANSACTION ROUTES
  // -------------------------------------- //

  // GET all Transactions
  getTransactions: function () {
    return axios.get("/api/Transactions");
  },



  // -------------------------------------- //
  // REPORT ROUTES
  // -------------------------------------- //

  // GET all Reports
  getReports: function () {
    return axios.get("/api/Reports");
  }




};
