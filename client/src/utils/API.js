// import axios from "axios";

export default {
  // Gets all Templates
  getTemplates: function() {
    return axios.get("/api/Templates");
  },
  // Gets the Template with the given id
  getTemplate: function(id) {
    return axios.get("/api/Templates/" + id);
  },
  // Deletes the Template with the given id
  deleteTemplate: function(id) {
    return axios.delete("/api/Templates/" + id);
  },
  // Saves a Template to the database
  saveTemplate: function(TemplateData) {
    return axios.post("/api/Templates", TemplateData);
  }
};
