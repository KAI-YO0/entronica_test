const express = require('express')
const db = require('./config/database')
const app = express()
const port = 5000;
const bodyParser = require('body-parser')
const mysql = require('mysql')

const customerRoutes = require('./routes/customerRoutes')
const customerAddressRoutes = require('./routes/customerAddressRoutes')


app.use(bodyParser.json());

app.use('/api/customers', customerRoutes);
app.use('/api/customer_addresses', customerAddressRoutes);

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:5000`)
})