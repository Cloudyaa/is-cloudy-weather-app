import { createServer } from './server';

// start the server for local testing
createServer().then((app) => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});
