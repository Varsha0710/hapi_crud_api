const Hapi = require('@hapi/hapi');
const sequelize = require('./config/database');
const routes = require('./routes/userRoutes');


const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });
  
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

  server.route(routes);

  try {
    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

init();