const express = require('express');
const apiRoutes = require('./api-routes/apiroutes');
const htmlRoutes = require('./api-routes/htmlroutes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use(apiRoutes)
app.use(htmlRoutes)



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});