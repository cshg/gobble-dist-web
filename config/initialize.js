const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jade = require('jade').__express;

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, './../../client')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.engine('jade', jade);
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, './../views'));
};
