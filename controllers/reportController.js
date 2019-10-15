const db = require("../models");

// Defining methods for the reportsController
module.exports = {
    findAll: function (req, res) {
        db.Report
            .findAll()
            .then(reports => res.json(reports))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Report
            .findByPk(req.params.id)
            .then(report => res.json(report))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Report
            .create(req.body)
            .then(report => res.json(report))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Report
            .destroy({ where: { id: req.params.id } })
            .then(res.json({ reportRemoved: true }))
            .catch(err => res.status(422).json(err));
    }
};
