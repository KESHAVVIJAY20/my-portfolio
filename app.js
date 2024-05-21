const express = require('express');
const path = require('path');
const route = require('./routes/index');

const app = express();
const port = 3000;

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
// Define a route
app.use('/', route);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
