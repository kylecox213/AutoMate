const db = require("../models");

// Defining methods for the transactionsController
module.exports = {
    findAll: function (req, res) {
        db.Transaction
            .findAll()
            .then(transactions => res.json(transactions))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Transaction
            .findByPk(req.params.id)
            .then(transaction => res.json(transaction))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Transaction
            .create(req.body)
            .then(transaction => res.json(transaction))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Transaction
            .update(req.body, { where: { id: req.params.id } })
            .then(transaction => res.json(transaction))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Transaction
            .destroy({ where: { id: req.params.id } })
            .then(res.json({ transactionRemoved: true }))
            .catch(err => res.status(422).json(err));
    },
    pullCustomers: function (req, res) {
        db.Transaction
            .findByPk(req.params.id)
            .then(transaction => transaction.getCustomers())
            .then(customers => res.send(customers))
            .catch(err => res.status(422).json(err));
    },
    pullVehicles: function (req, res) {
        db.Transaction
            .findByPk(req.params.id)
            .then(transaction => transaction.getVehicles())
            .then(vehicles => res.send(vehicles))
            .catch(err => res.status(422).json(err));
    },
};
