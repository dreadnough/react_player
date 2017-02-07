'use strict'

const app = require('./app');
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9000;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.listen(port,server_ip_address,() =>{
console.log(`App listening on port ${port}`);
});