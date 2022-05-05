const Services = require('../models/services')


exports.createService = (req, res, next) => {
    const service = new Services({
      name: req.body.name,
    });
    service.save().then(
      () => {
        res.status(201).json({
          message: 'Service saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.deleteService = (req, res, next) => {
  Services.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllservices = (req, res, next) => {
    Services.find().then(
      (services) => {
        res.status(200).json(services);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };