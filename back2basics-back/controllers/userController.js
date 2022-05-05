const Users = require('../models/users');

exports.createUser = (req, res, next) => {
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.save().then(
      () => {
        res.status(201).json({
          message: 'User saved successfully!'
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

exports.getAllusers = (req, res, next) => {
  Users.find().then(
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

exports.getOneUser = (req, res, next) => {
    Users.findOne({
      _id: req.params.id
    }).then(
      (user) => {
        res.status(200).json(user);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
exports.modifyUser = (req, res, next) => {
  const user = new Users({
    _id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
  });
  Users.updateOne({_id: req.params.id}, user).then(
    () => {
      res.status(201).json({
        message: 'User updated successfully!'
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

exports.addWidget = (req, res, next) => {
    const user = new Users({
      _id: req.params.id,
      widgets: req.body.widgets,
    });
    Users.updateOne({_id: req.params.id}, { $addToSet: { widgets: user.widgets } }, { updated_at: new Date() } ).exec().then(
      () => {
        res.status(201).json({
          message: 'User updated successfully!'
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

exports.removeWidget = (req, res, next) => {
  const user = new Users({
    _id: req.params.id,
    widgets: req.body.widgets,
  });
  console.log('user is ', user)
  Users.updateOne({_id: req.params.id}, { $pullAll: { widgets: user.widgets } }, { updated_at: new Date() } ).exec().then(
    () => {
      res.status(201).json({
        message: 'User updated successfully!'
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

