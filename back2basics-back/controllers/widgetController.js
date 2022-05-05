const Widgets = require('../models/widgets');

exports.getAllwidgets = (req, res, next) => {
    Widgets.find().populate('service', ['name']).then(
      (widgets) => {
        res.status(200).json(widgets);
  }
).catch(
      (error) => {
        res.status(400).json({
          error: error
    });
  }
);
};

exports.createWidget = (req, res, next) => {
    const widget = new Widgets({
      name: req.body.name,
      service: req.body.service,
    });
    widget.save().then(
      () => {
        res.status(201).json({
          message: 'Widget saved successfully!'
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


exports.deleteWidget = (req, res, next) => {
  Widgets.deleteOne({_id: req.params.id}).then(
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