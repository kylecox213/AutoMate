const db = require("../models");

// Defining methods for the VehiclesController
module.exports = {
    findAll: function (req, res) {
        db.Vehicle
            .findAll()
            .then(vehicles => res.json(vehicles))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Vehicle
            .findById(req.params.id)
            .then(vehicle => res.json(vehicle))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Vehicle
            .create(req.body)
            .then(vehicle => res.json(vehicle))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Vehicle
            .update(req.body, { where: { id: req.params.id } })
            .then(vehicle => res.json(vehicle))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Vehicle
            .destroy({ where: { id: req.params.id } })
            .then(res.json({ vehicleRemoved: true }))
            .catch(err => res.status(422).json(err));
    },
    pullTransactions: function (req, res) {
        db.Vehicle
            .findById(req.params.id)
            .then(vehicle => vehicle.getTransactions())
            .then(transactions => res.send(transactions))
            .catch(err => res.status(422).json(err));
    }
};
