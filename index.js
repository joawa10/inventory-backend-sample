//server
const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products');
const customersRoutes = require('./routes/customers');
const ordersRoutes = require('./routes/orders');
const order_detailsRoutes = require('./routes/order_details');

const errorController = require('./controllers/error');

const app = express();
const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

// Set custom header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next(); 
});

app.use('/products', productsRoutes);
app.use('/customers', customersRoutes);
app.use('/orders', ordersRoutes);
app.use('/order_details', order_detailsRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => {
    console.log(`listening on port ${ports}`);
});
