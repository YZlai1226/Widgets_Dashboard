const mongoose = require('mongoose');
const Services = require('./models/services');
const Users = require('./models/users');
const Widgets = require('./models/widgets');

//mongoDB connection
mongoose.connect('mongodb+srv://ProjectMicroService:hMZh2kgzdxXYuPd@cluster0.65kkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


// const setup
const express = require('express');
const app = express();
app.use(express.json());


//ROUTES

//****** services */
app.post('/api/services', (req, res, next) => {
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
});

app.delete('/api/services/:id', (req, res, next) => {
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
});

//****** users */
app.post('/api/users', (req, res, next) => {
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
});

app.get('/api/users/:id', (req, res, next) => {
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
});

app.put('/api/users/:id', (req, res, next) => {
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
})

app.put('/api/add_widget/:id', (req, res, next) => {
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
})

app.put('/api/remove_widget/:id', (req, res, next) => {
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
})


//****** widgets */
app.post('/api/widgets', (req, res, next) => {
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
});

app.delete('/api/widgets/:id', (req, res, next) => {
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
});


//middleware

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/services', (req, res, next) => {
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
  });

app.use('/api/users', (req, res, next) => {
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
  });

app.use('/api/widgets', (req, res, next) => {
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
});



module.exports = app;
