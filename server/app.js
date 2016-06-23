import 'babel-polyfill';

// Load environment variables
import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './env/production.env' });
}

import express from 'express';
const app = express();

import initialize from './config/initialize';
initialize(app, express);

// Server-side Rendering
import routeJadeViews from './routes/jade-only-routes';
routeJadeViews(app);

import routeLanding from './routes/landing-routes';
routeLanding(app);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} is listening on port ${process.env.PORT}.`);
});

export default app;
