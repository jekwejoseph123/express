// import express
const express = require('express');
const fs = require('fs');
// create an application for express
const app = express();
// create a port number
const port = 9000

const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const serviceRoute = require('./routes/serviceRoute')



// storing pages in variables

const homePage = fs.readFileSync('./pages/index.html', 'utf-8');
const aboutPage = fs.readFileSync('./pages/about.html', 'utf-8');
const contactPage = fs.readFileSync('./pages/contact.html', 'utf-8');
const productPage = fs.readFileSync('./pages/product.html', 'utf-8');
const testimonialPage = fs.readFileSync('./pages/testimonial.html', 'utf-8');


app.get('/', (request, response) => {
    response.send(homePage);

})

// app.get('/about', (request, response) => {
//     response.send(aboutPage);

// })

// app.get('/contact', (request, response) => {
//     response.send(contactPage);

// })

// app.get('/product', (request, response) => {
//     response.send(productPage);

// })

// app.get('/testimonial', (request, response) => {
//     response.send(testimonialPage)

// })

// server will now handle json data
app.use(express.json())

// using product route
app.use( productRoute);
app.use(userRoute);
app.use(serviceRoute);






// start your server
app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`);
})